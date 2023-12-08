import  { query } from "@/lib/db";
import { BillboardForm } from "./component/billboard-form";

const BillboardPage = async ({params}) => {
  const billboards = await query("SELECT * FROM billboard where id = ?", [params.billboardId]);

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardForm initialData={billboards} />
      </div>
    </div>
  )
}

export default BillboardPage;