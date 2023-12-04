"use server";

import { query } from "@/lib/db";

export async function getGraphRevenue(storeId){
  const sanitizeStoreId = storeId.replace(/\D/g,"")

    const paidOrders = await query("SELECT orders.*, orderitem.*, product.* FROM orders INNER JOIN orderitem ON orders.id = orderitem.orderId INNER JOIN product ON orderitem.productId = product.id WHERE orders.storeId = ? AND orders.isPaid = true", [storeId]);
    
    // console.log(paidOrders);
    // [
    //   {
    //     id: 1,
    //     storeId: 1,
    //     isPaid: 1,
    //     phone: '+639217099339',
    //     address: 'sitio Kalayakan Brgy kalawakan',
    //     createdAt: 2023-12-04T09:33:40.000Z,
    //     updatedAt: 2023-12-04T09:33:40.000Z,
    //     orderId: 2,
    //     productId: 1,
    //     categoryId: 1,
    //     name: 'Beer',
    //     price: '12.20',
    //     isFeatured: 0,
    //     haveColor: 0,
    //     haveSize: 0,
    //     isArchived: 0
    //   }
    // ]

    const monthlyRevenue = {};
    for(const order of paidOrders){
      const month = new Date(order.createdAt).getMonth();
      // console.log(new Date(order.createdAt).getMonth())
      let revenueForOrder = 0;
        revenueForOrder += parseInt(order.price);
      
      monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
    }

    // console.log(monthlyRevenue);
    // { '11': 12 }

  
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
      // console.log(month)
      graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
      // graphData[parseInt(month)].total = 2;
    }

    graphData[2].total = 3
    // console.log(graphData)
  
    return graphData;
    
  }
