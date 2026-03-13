import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { seoArticles } from './components/seoData';
import { SeoPageTemplate } from './components/SeoPageTemplate';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Simple router based on window.location.pathname
const path = window.location.pathname.replace(/^\/|\/$/g, ''); // strip leading/trailing slashes
const matchedArticle = seoArticles.find(a => a.id === path);

root.render(
  <React.StrictMode>
    {matchedArticle && path !== '' ? <SeoPageTemplate article={matchedArticle} /> : <App />}
  </React.StrictMode>
);