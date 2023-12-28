const { query } = require("@/lib/db")


const CategoryPage =  async ({params}) => {
  try {
    const category = await query("Select * from category where id = ?", [params.categoryId]);
    const billboards = await query("Select * from billboard where storeId = ?",[params.storeId]);
    
  } catch (error) {
    if(error){
      return (
        <>
          <div className="text-2xl font-black">Internal Error</div>
        </>
      )
    }
  }

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        
      </div>
    </div>
  )
}

export default CategoryPage;