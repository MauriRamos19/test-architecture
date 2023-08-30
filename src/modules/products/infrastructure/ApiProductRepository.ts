import { ProductRepository } from "../domain/productRepository";
import { Product } from "../domain/product";

export function createProductRepository(): ProductRepository {
	return {
		create,
		get,
        getAll
	};
}

async function create(product: Product) {
	await fetch("/api/produts/create", {
		method: "POST",
		body: JSON.stringify({
			id: product.id,
			name: product.name,
			price: product.price
		}),
	});
}

async function get(id: string) {
	const product = await fetch(`/api/products/${id}`).then(
		(response) => response.json() as Promise<Product>
	);

	return product;
}

async function getAll() {
	const product = await fetch(`/api/products`).then(
		(response) => response.json() as Promise<Product>
	);

	return product;
}

