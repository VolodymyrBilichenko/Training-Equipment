// src/utils/db.js
import { openDB } from "idb";

export const getDB = () =>
  openDB("shop-db", 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("products")) {
        db.createObjectStore("products", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("favorite-products")) {
        db.createObjectStore("favorite-products", { keyPath: "id" });
      }
    },
  });

export const saveProductsFromServer = async (products) => {
  const db = await getDB();
  const tx = db.transaction("products", "readwrite");
  const store = tx.objectStore("products");
  
  // Очищаем все существующие товары
  await store.clear();
  
  // Сохраняем новые товары с сервера
  for (const product of products) {
    await store.put(product);
  }
  await tx.done;
};

// Добавить или обновить товар
export const saveProducts = async (products) => {
  const db = await getDB();
  const tx = db.transaction("products", "readwrite");
  const store = tx.objectStore("products");
  for (const product of products) {
    await store.put(product);
  }
  await tx.done;
};

// Favorite products 
export const saveFavoriteProductsFromServer = async (products) => {
  const db = await getDB();
  const tx = db.transaction("favorite-products", "readwrite");
  const store = tx.objectStore("favorite-products");
  
  // Очищаем все существующие товары
  await store.clear();
  
  // Сохраняем новые товары с сервера
  for (const product of products) {
    await store.put(product);
  }
  await tx.done;
};

export const saveFavoriteProduct = async (product) => {
  const db = await getDB();
  const tx = db.transaction("favorite-products", "readwrite");
  const store = tx.objectStore("favorite-products");
  await store.put(product);
  await tx.done;
};

export const getFavoriteProducts = async () => {
  const db = await getDB();
  return db.getAll("favorite-products");
};

export const removeFavoriteProduct = async (id) => {
  const db = await getDB();
  const tx = db.transaction("favorite-products", "readwrite");
  const store = tx.objectStore("favorite-products");
  await store.delete(id);
  await tx.done;
};

// Получить все товары
export const getAllCartProducts = async () => {
  const db = await getDB();
  return db.getAll("products");
};

// Очистить хранилище
export const clearProducts = async () => {
  const db = await getDB();
  return db.clear("products");
};

export const removeProduct = async (id) => {
  const db = await getDB();
  const tx = db.transaction("products", "readwrite");
  const store = tx.objectStore("products");
  await store.delete(id);
  await tx.done;
};

export const getProduct = async (id) => {
  const db = await getDB();
  const product = await db.get("products", id);
  return product;
};

export const updateProduct = async (product) => {
  const db = await getDB();
  const tx = db.transaction("products", "readwrite");
  const store = tx.objectStore("products");

  await store.put(product); // Обновит по ключу (id)
  await tx.done;
};
