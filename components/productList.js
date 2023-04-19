import React from 'react';
import Link from 'next/link';

async function getProducts() {
    const res = await fetch(`http://localhost:3005/api/products?timestamp=${new Date().getTime()}`)
    const products = await res.json()
    console.log(products)
    return products
}

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <h1 className='ffasc text-center text-secondary'>Check Our<span className='red'> Yummy Menu</span></h1>
                        {products?.map((product) => (
                            <div
                                key={product?._id}
                                className="col-md-12 col-lg-3 mb-4 mb-lg-0 pt-4 "
                            >
                                <div className="card h-100">
                                    <img
                                        src={product.productImg}
                                        className="card-img-top p-4 prod-img"
                                        height={250}
                                        width={100}
                                        alt={product.designation}
                                    />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <p className="small cat kleeone">{product.categoryID.categoryName}</p>
                                        </div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <Link href={`/products/${product._id}`}>
                                                <h5 className="mb-0 text color-desgin-prod">{product.designation}</h5>
                                            </Link>
                                            <h5 className="price text mb-0 ">{product.price} DT</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default ProductsPage;
