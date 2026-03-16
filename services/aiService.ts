
import { GoogleGenAI, Type } from "@google/genai";
import { MenuItem } from "../types";

const CACHE_PREFIX = "capuano_ai_img_";
const REVIEWS_CACHE_KEY = "capuano_google_reviews";
const REVIEWS_TIMESTAMP_KEY = "capuano_reviews_timestamp";
const CACHE_TTL = 72 * 60 * 60 * 1000; // 72 hours

const DB_NAME = "VincenzoCapuanoAssets";
const STORE_NAME = "images";

const getDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 2);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const getCacheKey = (prompt: string, aspectRatio: string) => {
  const sanitizedPrompt = prompt.toLowerCase()
    .replace(/[^a-z0-9]/g, "_")
    .substring(0, 100);
  return `${CACHE_PREFIX}${sanitizedPrompt}_${aspectRatio}`;
};

export const getCachedImage = async (prompt: string, aspectRatio: string): Promise<string | null> => {
  try {
    const db = await getDB();
    const key = getCacheKey(prompt, aspectRatio);
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch (e) {
    console.warn("Failed to read from IndexedDB", e);
    return null;
  }
};

export const getAllCachedImages = async (): Promise<Record<string, string>> => {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      const keysRequest = store.getAllKeys();
      
      request.onsuccess = () => {
        const results: Record<string, string> = {};
        const keys = keysRequest.result as string[];
        const values = request.result as string[];
        keys.forEach((key, i) => {
          results[key] = values[i];
        });
        resolve(results);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.error("Failed to fetch all assets", e);
    return {};
  }
};

export const clearImageCache = async (): Promise<void> => {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.error("Failed to clear IndexedDB", e);
  }
};

export const fetchGoogleReviews = async () => {
  try {
    const cachedData = localStorage.getItem(REVIEWS_CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(REVIEWS_TIMESTAMP_KEY);
    const now = Date.now();

    if (cachedData && cachedTimestamp && now - parseInt(cachedTimestamp) < CACHE_TTL) {
      return JSON.parse(cachedData);
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) return null;
    
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Provide top 5-star Google reviews for "Vincenzo Capuano Singapore". Format as JSON array.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              author: { type: Type.STRING },
              text: { type: Type.STRING },
              rating: { type: Type.NUMBER }
            },
            required: ["author", "text", "rating"]
          }
        }
      }
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const sourceUrl = groundingChunks?.[0]?.web?.uri || "https://www.google.com/search?q=Vincenzo+Capuano+Singapore+Reviews";

    let reviews = JSON.parse(response.text || "[]");
    if (Array.isArray(reviews)) {
      reviews = reviews.map(r => ({ ...r, sourceUrl }));
      localStorage.setItem(REVIEWS_CACHE_KEY, JSON.stringify(reviews));
      localStorage.setItem(REVIEWS_TIMESTAMP_KEY, now.toString());
    }
    return reviews;
  } catch (error) {
    console.error("Failed to fetch AI reviews:", error);
    return null;
  }
};
