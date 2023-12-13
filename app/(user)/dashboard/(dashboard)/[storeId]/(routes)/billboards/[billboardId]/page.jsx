import  { query } from "@/lib/db";
import { BillboardForm } from "./component/billboard-form";

const BillboardPage = async ({params}) => {
  const billboards = await query("SELECT * FROM billboard where id = ?", [params.billboardId]);
  // console.log(billboards)
  // [{
  //   id: 1,
  //   storeId: 1,
  //   label: 'Label Billboard on Store',
  //   imageUrl: 'https://cdn.bannerbuzz.com/media/optionvalue/Banner-Stands-Wind-Flaps-560X590.jpg_1.jpg',
  //   createdAt: 2023-12-04T09:06:06.000Z,
  //   updatedAt: 2023-12-04T09:06:06.000Z
  // }]
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardForm initialData={billboards} />
      </div>
    </div>
  )
}

export default BillboardPage;