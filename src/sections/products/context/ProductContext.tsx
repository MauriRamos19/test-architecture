import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { createProduct } from "../../../modules/products/application/createProduct";
import { getProduct } from "../../../modules/products/application/getProduct";
import { Product } from "../../../modules/products/domain/Product";
import { ProductRepository } from "../../../modules/products/domain/productRepository";
import { getAllProducts } from "../../../modules/products/application/getAllProducts";

export interface ContextState {
	products: Product[];
	createProduct: (product: { name: string; price: number }) => Promise<void>;
}

export const ProductsContext = React.createContext({} as ContextState);

export const ProductsContextProvider = ({
	children,
	repository,
}: React.PropsWithChildren<{ repository: ProductRepository }>) => {

	const [products, setProducts] = useState<Product[]>([]);

	async function create({ name, price }: { name: string; price: number }) {
		const id = (uuidv4 as () => string)(); 

		await createProduct(repository)({ id, name, price });
		await getCourses();
	}

	async function getCourses() {
		const products = await getAllProducts(repository)();
		setProducts(products);
	}

	return (
		<ProductsContext.Provider value={{ products, createProduct: create }}>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProductsContext = () => useContext(ProductsContext);