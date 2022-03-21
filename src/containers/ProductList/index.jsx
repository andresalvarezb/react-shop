import React from 'react'
import ProductItem from '../../components/ProductItem'
import useFetchData from '../../hooks/useFetchData';
import './productList.css'

// TODO: it's important understand how work the API to use it
const API = 'https://api.escuelajs.co/api/v1/products';

// `${API}?limit=${12}&offset=${0}`

// ? Stateful
function ProductList() {

	const products = useFetchData(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map(product => <ProductItem key={product.id} product={product} />)
				}
			</div>
		</section>
	)
}

export default ProductList