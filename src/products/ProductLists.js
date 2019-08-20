import React from 'react';
import ProcuctDescription from './ProductDescription';

const ProductLists = ({products}) => {
  return (
    <div className="project-list section">
     {products && products.map(product => {
       return <ProcuctDescription product={product} key={product.id}/>
     })}
    </div>
  )
}

export default ProductLists
