
import { MenuItem } from "../types";

const CACHE_PREFIX = "capuano_ai_img_";

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
