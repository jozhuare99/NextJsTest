import { CategoryForm } from "./components/category-form";

const { query } = require("@/lib/db")


const CategoryPage =  async ({params}) => {

  try {
    const category = await query("Select * from category where id = ?", [params.categoryId]);
    const billboards = await query("Select * from billboard where storeId = ?",[params.storeId]);
    
    return (
      <div className="flex-col">
        <div className="flex-1 p-8 pt-6 space-y-4">
          <CategoryForm billboards={billboards} initialData={category} />
        </div>
      </div>
    )
  } catch (error) {
    if(error){
      return (
        <>
          <div className="text-2xl font-black">Internal Error</div>
        </>
      )
    }
  }


}

export default CategoryPage;