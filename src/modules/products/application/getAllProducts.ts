import { Product } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";

export function getAllProducts(productRepository: ProductRepository) {
	return async function (): Promise<Product[]> {
		return productRepository.getAll();
	};
}