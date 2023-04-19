"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
const disProductsTable = ({ products }) => {
    const columns = [
        {
            label: "Name",
            name: "designation"
        },
        {
            label: "Price",
            name: "price"
        },
        {
            label: "Image",
            name: "productImg",
            options: {
                customBodyRender: (rowdata) => (
                    <img
                        style={{ height: 60, width: 70, borderRadius: '10%' }}
                        src={`${rowdata}`}
                        alt=""
                    />
                )
            }
        }
    ];
    return (
        <>
            {products && products?.length > 0 ?

                <MUIDataTable
                    title="Products List"
                    data={products}
                    columns={columns}
                />

                : null}
        </>
    )
}
export default disProductsTable; 