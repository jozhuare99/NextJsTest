import ProductCard from "./ui/product-card";
import NoResults from "./ui/no-result";

const ProductList = ({title,items}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid gap-4 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          items.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductList;