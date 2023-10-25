'use client'
import Container from '../ui/container';
import Link from 'next/link';
import MainNav from './main-nav';

export default async function Navbar() {
  // const categories = await getCategories()
  // create categories array with id and label for e-commerce

  const categories = 
    [
      {
        "id": "apparel",
        "label": "Apparel",
        "basic_categories": [
          "Women's Clothing",
          "Men's Clothing",
          "Children's Clothing",
          "Accessories"
        ]
      },
      {
        "id": "electronics",
        "label": "Electronics",
        "basic_categories": [
          "Cell Phones & Accessories",
          "Computers & Tablets",
          "Televisions & Home Entertainment",
          "Audio",
          "Wearable Technology"
        ]
      },
      {
        "id": "homeandgarden",
        "label": "Home & Garden",
        "basic_categories": [
          "Appliances",
          "Bedding & Bath",
          "Furniture",
          "Home Decor",
          "Kitchen & Dining"
        ]
      },
      {
        "id": "healthandbeauty",
        "label": "Health & Beauty",
        "basic_categories": [
          "Cosmetics & Personal Care",
          "Fragrances",
          "Hair Care",
          "Skin Care",
          " Vitamins & Supplements"
        ]
      },
      {
        "id": "toysandgames",
        "label": "Toys & Games",
        "basic_categories": [
          "Action Figures & Vehicles",
          "Arts & Crafts",
          "Building & Construction",
          "Educational Toys",
          "Outdoor Toys"
        ]
      },
      {
        "id": "foodandbeverage",
        "label": "Food & Beverage",
        "basic_categories": [
          "Coffee & Tea",
          "Snacks & Candy",
          "Soft Drinks",
          "Wine & Beer",
          "Grocery Items"
        ]
      },
      {
        "id": "petsupplies",
        "label": "Pet Supplies",
        "basic_categories": [
          "Food & Treats",
          "Grooming Supplies",
          "Toys & Accessories",
          "Beds & Bedding",
          "Health & Wellness"
        ]
      },
      {
        "id": "sportsandoutdoors",
        "label": "Sports & Outdoors",
        "basic_categories": [
          "Camping & Hiking",
          "Fitness Equipment",
          "Golf",
          "Sports Apparel & Equipment",
          "Team Sports Equipment"
        ]
      }
    ]
  
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="text-xl font-bold">Store</p>
          </Link>
          <MainNav data={categories} />
          
        </div>
      </Container>
    </div>
  )
}
