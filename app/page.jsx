"use client";

import { products } from "someData.js";
import Billboard from "./component/ui/billboard";
import Container from "./component/ui/container";
import ProductList from "./component/product-list";
import ModalProvider from "providers/modal-provider";

export default function Page() {
  const billboard = {
    id: "hyo2188217hdo821",
    storeId: "lakdniuqwndo81",
    store: {
      StoreToBillBoard: {
        fields: ["hyo2188217hdao821", "lakdniuqwndo8s1"],
        references: ["iDnuyedbuysauy"],
      },
    },
    label: "Store Name 1",
    imageUrl: "/billboard/topglogo.png",
    categories: ["Category 1", "Category 2", "Category 3"],
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  };

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
          <ModalProvider />
        </div>
      </div>
    </Container>
  );
}
