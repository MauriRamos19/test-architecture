import { Product } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";

export function createProduct(productRepository: ProductRepository) {
	return async function (product: Product): Promise<void> {
		await productRepository.create(product);
	};
}