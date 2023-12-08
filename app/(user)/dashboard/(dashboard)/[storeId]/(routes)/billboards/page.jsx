"use server";

import { query } from "@/lib/db";
import { BillboardClient } from "./components/client";

const BillboardPage = async ({params}) => {
  const billboards = await query("SELECT * FROM billboard WHERE storeId = ? order by createdAt desc", [params.storeId]);
  // [
  //   {
  //     id: 1,
  //     storeId: 1,
  //     label: 'Label Billboard on Store',
  //     imageUrl: 'https://cdn.bannerbuzz.com/media/optionvalue/Banner-Stands-Wind-Flaps-560X590.jpg_1.jpg',
  //     createdAt: 2023-12-04T09:06:06.000Z,
  //     updatedAt: 2023-12-04T09:06:06.000Z
  //   }
  // ]
  const formattedBillBoards = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: Date(item.createdAt)
  }))
  // console.log(formattedBillBoards);
  // [
  //   {
  //     id: 1,
  //     label: 'Label Billboard on Store',
  //     createdAt: 'Tue Dec 05 2023 10:53:19 GMT+0800 (China Standard Time)'
  //   }
  // ]
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardClient data={formattedBillBoards} />
      </div>
    </div>
  )
}

export default BillboardPage;