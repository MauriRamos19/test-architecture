import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './sections/router/AppRouter'
import { createProductRepository } from './modules/products/infrastructure/ApiProductRepository'
import { ProductsContextProvider } from './sections/products/context/ProductContext'

function App() {
  const productRepository = createProductRepository()
  
  return (
    <>
    <ProductsContextProvider repository={productRepository}>
      <AppRouter />
    </ProductsContextProvider>
    </>
  )
}

export default App
