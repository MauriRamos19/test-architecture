import { Product } from "./product";

export interface ProductRepository {
	create: (product: Product) => Promise<void>;
	get: (id: string) => Promise<Product | null>;
    getAll: () => Promise<Product[]>
}