import React, { Suspense } from "react";
import ProductList from '@/components/productList';
import CategoryList from '@/components/categoryList';
async function getProducts() {
    const res = await fetch('http://localhost:3005/api/products')
    const products = await res.json();
    return products;
}
async function getCategries() {
    const res = await fetch(`http://localhost:3005/api/categories?timestamp=${new Date().getTime()}`)
    const categories = await res.json();
    return categories;
}
const ProductsPage = async () => {
    const products = await getProducts();
    const categories = await getCategries();
    return (
        <>
            <Suspense fallback={<p>Loading Categories...</p>}>
                <CategoryList categories={categories} />
            </Suspense>
            <Suspense fallback={<p>Loading Products...</p>}>
                <ProductList products={products} />
            </Suspense>

        </>
    )
}
export default ProductsPage; 