import {Avatar, Box} from './src/assets/img';

export const list = [
  {
    title: 'Best Selling',
    items: [
      {
        title: "Acetate Sunglasses",
        price: 10.99,
        rating: 5.0,
        ratingCount: 70,
        image: '/image.png',
      },
      {
        title: 'Wool Cashmere Jacket',
        price: 180,
        rating: 4.7,
        ratingCount: 23,
        image: '/coat.png'
      },
      {
        title: 'Travel Pet Carrier',
        price: 42,
        rating: 4.5,
        ratingCount: 50,
        image: '/bag.png'
      },
      {
        title: 'Clem Cashmere Scarf',
        price: 65,
        rating: 4.9,
        ratingCount: 46,
        image: '/scarf.png'
      }
    ]
  },
  {
    title: 'New Arrivals',
    items: [
      {
        title: 'Wool Cashmere Jacket',
        price: 180,
        rating: 4.7,
        ratingCount: 23,
        image: '/coat.png'
      },
      {
        title: 'Acetate Sunglasses',
        price: 10.99,
        rating: 5.0,
        ratingCount: 70,
        image: '/image.png'
      },
      {
        title: 'Clem Cashmere Scarf',
        price: 65,
        rating: 4.9,
        ratingCount: 46,
        image: '/scarf.png'
      },
      {
        title: 'Travel Pet Carrier',
        price: 42,
        rating: 4.5,
        ratingCount: 50,
        image: '/bag.png'
      },
    ]
  }
]

export const  products = {
  name: 'Zip Tote Basket',
  price: 140.00,
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled View',
      src: Box,
      alt: 'Angled View front with bag zipped and handles upright.'
    }
  ],
  colors: [
    {
      name: "Washed Black",
      value: '#6C6C6C',
    },
    {
      name: 'Washed Gray',
      value: '#F7F0EA',
    },
    {
      name:'White',
      value: '#FFFF'
    }
  ],
  sizes: [
    {name: 'XL', selected: false},
    {name: 'L', selected: false},
    {name: 'M', selected: false},
    {name: 'S', selected: false},
    {name: 'XS', selected: false}
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping note and comfy backpack. With convertible straps,
    you can hand carry, should sling, or backpack this </p>
  `,
  details: [
    {
      name: 'Features',
      value: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior Dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistance',
      ]
    }
  ]
}

export const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    {rating: 5, count: 1019 },
    {rating: 4, count: 162 },
    {rating: 3, count: 97},
    {rating: 2, count: 199},
    {rating: 1, count: 147},
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `<p>
      This is the bag of my dreams. I took it on my last vacation and was able to fir an absurd amount of snacks for the many long and hungry flights.
      </p>
      `,
      author: 'Emily Selmen',
      avatar: Avatar,
    }
  ]
}

export const filters = [
  {
    id: 'color',
    name: 'color',
    options: [
      {value: 'White', label: 'White'},
      {value: 'beige', label: 'Biege'},
      {value: 'blue', label: 'Blue'},
      {value: 'brown', label: 'Brown'},
      {value: 'orange', label: 'Orange'},
      {value: 'pink', label: 'Pink'},
      {value: 'purple', label: 'Purple'},
      {value:'red', label: 'Red'},
      {value: 'yellow', label: 'Yellow'},
      {value: "green", label: 'Green'},
    ]
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      {value: 'xs', label: "XS"},
      {value: 's', label: "S"},
      {value: 'm', label: "M"},
      {value: 'l', label: "L"},
      {value: 'xl', label: "XL"},
      {value:'xxl', label: "XXL"},
    ]
  }
]