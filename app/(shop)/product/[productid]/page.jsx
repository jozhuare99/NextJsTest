"use client";

import ProductList from "app/component/product-list";
import Gallery from "app/component/gallery";
import Info from "app/component/descriptions/gallery-info"; 
import Container from "app/component/ui/container";
import { list, products } from "someData";

export const revalidate = 0;

const ProductPage = ({params}) => {
  const product = products.find(p => p.id === params.productid);

  const bestSellingList = list.find(item => item.title === 'Best Selling');

  if(!product){
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x8">
            <Gallery images={product.images}/>
            <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product}/>
            </div>
            <hr className="my-10" />
            <ProductList title="Related Items" items={bestSellingList.items}/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductPage;