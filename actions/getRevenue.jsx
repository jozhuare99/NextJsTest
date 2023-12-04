"use server";

import { query } from "@/lib/db";

export async function getGraphRevenue(storeId){
  const sanitizeStoreId = storeId.replace(/\D/g,"")

    const paidOrders = await query("SELECT orders.*, orderitem.*, product.* FROM orders INNER JOIN orderitem ON orders.id = orderitem.orderId INNER JOIN product ON orderitem.productId = product.id WHERE orders.storeId = ? AND orders.isPaid = true", [storeId]);
    
    // console.log(paidOrders);

    const monthlyRevenue = {};
    for(const order of paidOrders){
      const month = order.createdAt.getMonth();
      let revenueForOrder = 0;
      for(const item of order.orderItems){
        revenueForOrder += item.product.price.toNumber();
      }
      monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
    }
  
    const graphData = [
      {name:"Jan",total:0},
      {name:"Feb",total:0},
      {name:"Mar",total:0},
      {name:"Apr",total:0},
      {name:"May",total:0},
      {name:"Jun",total:0},
      {name:"Jul",total:0},
      {name:"Aug",total:0},
      {name:"Sep",total:0},
      {name:"Oct",total:0},
      {name:"Nov",total:0},
      {name:"Dec",total:0},
    ];
  
    for(const month in monthlyRevenue){
      graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
      // graphData[parseInt(month)].total = 2;
    }

    graphData[2].total = 3
    // console.log(graphData)
  
    return graphData;
    
  }
