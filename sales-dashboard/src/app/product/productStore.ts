import { create } from 'zustand';

export type Product = {
  sku: string;
  name: string;
  price: string;
  size: number;
  qty: number;
  date: string;
  status: string;
  img: string;
};

type ProductStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) => set((state) => ({ products: state.products.filter((p) => p.sku !== id) })),
}));