"use client";

import { products,billboard } from "someData.js";
import Billboard from "../component/ui/billboard";
import Container from "../component/ui/container";
import ProductList from "../component/product-list";

export default function Page() {
  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard[0]} />
        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
