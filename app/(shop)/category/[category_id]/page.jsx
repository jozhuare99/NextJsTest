import Container from "app/component/ui/container";
import Billboard from "app/component/ui/billboard";
import ProductCard from "app/component/ui/product-card";
import NoResult from "app/component/ui/no-result";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import { products } from "someData";
export const revalidate = 0;
const CategoryPage = async ({params,searchParams}) => {
  const sizes = {};
  const colors = {};
  const category = {};
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={{}} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage;