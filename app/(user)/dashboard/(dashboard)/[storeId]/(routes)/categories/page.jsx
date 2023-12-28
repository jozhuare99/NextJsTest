import { query } from "@/lib/db";
import { CategoriesClient } from "./components/client";


const CategoriesPage = async({params}) => {
  const categories = await query("SELECT * FROM category LEFT JOIN billboard ON category.billboardId = billboard.id WHERE category.storeId = ? ORDER BY category.createdAt DESC;",[params.storeId]);
 
  const formattedCategories = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.label,
    createdAt: item.createdAt
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  )
}
export default CategoriesPage;