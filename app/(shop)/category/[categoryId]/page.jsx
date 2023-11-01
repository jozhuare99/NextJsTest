"use client";

import Container from "app/component/ui/container";
import Billboard from "app/component/ui/billboard";
import ProductCard from "app/component/ui/product-card";
import NoResult from "app/component/ui/no-result";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import { products, billboard } from "someData";
export const revalidate = 0;
const CategoryPage = ({params,searchParams}) => {
  const sizes =  [
    {
      id: "Aasdas",
      name: "xs"
    },
    {
      id: "1sad2s",
      name: "sm"
    },
    {
      id: "as1wda",
      name: "md"
    },
    {
      id: "sad1dqads",
      name: "lg"
    },
    {
      id: "asyudguh32gugf7u",
      name: "xl"
    },
  ];
  const colors =  [
    {
      id: "Aasdas",
      name: "xs"
    },
    {
      id: "1sad2s",
      name: "sm"
    },
    {
      id: "as1wda",
      name: "md"
    },
    {
      id: "sad1dqads",
      name: "lg"
    },
    {
      id: "asyudguh32gugf7u",
      name: "xl"
    },
  ];
  const category = billboard.find((b,i) => {
    return b.category === params.categoryId
  })

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes}/>
              <Filter valueKey="colorId" name="Colors" data={colors}/>
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult/>}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {
                  products.map((item) => (
                    <ProductCard key={item.id} data={item} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage;