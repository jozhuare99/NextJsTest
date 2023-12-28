import { execute, query } from "@/lib/db";
import {NextResponse} from "next/server";
import {cookies} from "next/headers"; 
import { VerifyUser } from "app/system/access";


export async function GET(req,{params}){
  try {
    if(!params.categoryId){
      return new NextResponse("Category id is required", {status: 400});
    }
    const category  = await query("select c.*, b.* from category c left join billboard b on c.billboardId = b.id where c.id = ? limit 1;", [params.categoryId]);
    return NextResponse.json(category);
  } catch (error) {
    console.log('[CATEGORY_GET]', error.message);
    return new NextResponse("internal Error", {status:500});
  }
}
export async function DELETE(req,{params}){
  const {userId: verifiedUserId,message, status} = VerifyUser;
  if(!verifiedUserId){
    return new NextResponse(message, {status});
  }
  try {
    if(!params.categoryId){
    return new NextResponse("Category id is required", {status: 400});
    }

    const storeByUserId = await query("select * from store where id = ? limit 1", [params.storeId]);
    const {id: storeId, userId} = storeByUserId;
    
    if(userId !== verifiedUserId){
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const deleteCategory = await execute("DELETE FROM category WHERE id = ?;", [params.categoryId]);
    return NextResponse.json(deleteCategory);
  } catch (error) {
    console.log('[CATEGORY_DELETE]', error.message);
    return new NextResponse("Internal Error", {status: 500});
  }
}

export async function PATCH(req,{params}){
  const {userId: verifiedUserId,message, status} = VerifyUser;
  if(!verifiedUserId){
    return new NextResponse(message, {status});
  }
  try {
    const body = await req.json();
    const {name,billboardId} = body;
    if(!billboardId){
      return new NextResponse("Billboard ID is required", {status:400});
    }
    if(!name){
      return new NextResponse("Name is required", {status: 400});
    }
    if(!params.categoryId){
      return new NextResponse("Category id is required", {status: 400})
    }
    const storeByUserId = await query("select * from store where id = ? limit 1", [params.storeId]);
    const {id: storeId, userId: storeUserId} = storeByUserId;
    
    if(storeUserId !== verifiedUserId){
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const category = await execute("UPDATE set billboardId = ?, name = ? where id = ?", [billboardId, name, params.categoryId]);
    return NextResponse.json(category);

  } catch (error) {
    console.log('[CATEGORY PATCH]', error);
    return new NextResponse("Internal Error", {status: 500});
  }
}
