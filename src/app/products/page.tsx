import Image from "next/image"

export default function ProductsPage() {

const silkyDesserts = [
  {
    name: "Chocolate Pudding",
    price: "Rp 25.000",
    image: "/products/chocolate.jpg",
  },
  {
    name: "Mango Pudding",
    price: "Rp 25.000",
    image: "/products/mango.jpg",
  },
  {
    name: "Strawberry Pudding",
    price: "Rp 25.000",
    image: "/products/strawberry.jpg",
  },
  {
    name: "Silky Matcha Pudding",
    price: "Rp 28.000",
    image: "/products/silky-matcha.jpg",
  },
  {
    name: "Silky Taro Pudding",
    price: "Rp 28.000",
    image: "/products/silky-taro.jpg",
  },
  {
    name: "Silky Milk Pudding",
    price: "Rp 26.000",
    image: "/products/silky-milk-pudding.jpg",
  },
]

const silkyDrinks = [
  {
    name: "Yakult Blue Citrus",
    price: "Rp 22.000",
    image: "/products/yakult-blue-citrus.jpg",
  },
  {
    name: "Yakult Peach",
    price: "Rp 22.000",
    image: "/products/yakult-peach.jpg",
  },
  {
    name: "Ice Caramel Latte",
    price: "Rp 24.000",
    image: "/products/iced-caramel-latte.jpg",
  },
  {
    name: "Silky Drink Matcha",
    price: "Rp 24.000",
    image: "/products/silky-drinks-ms.jpg",
  },
]

return (

<div className="bg-pink-50 min-h-screen py-16">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-4xl font-bold text-center mb-16">
Our Products
</h1>


{/* Silky Desserts */}

<section className="mb-20">

<div className="bg-pink-200 py-4 rounded-lg mb-10">
<h2 className="text-3xl font-bold text-center">
Silky Desserts
</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

{silkyDesserts.map((product, i) => (

<div
key={i}
className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
>

<div className="relative w-full h-52">

<Image
src={product.image}
alt={product.name}
fill
className="object-cover"
/>

</div>

<div className="p-4 text-center">

<h3 className="font-semibold text-md mb-1">
{product.name}
</h3>

<p className="text-pink-500 font-medium">
{product.price}
</p>

</div>

</div>

))}

</div>

</section>



{/* Silky Drinks */}

<section>

<div className="bg-pink-200 py-4 rounded-lg mb-10">
<h2 className="text-3xl font-bold text-center">
Silky Drinks
</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

{silkyDrinks.map((product, i) => (

<div
key={i}
className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
>

<div className="relative w-full h-70">

<Image
src={product.image}
alt={product.name}
fill
className="object-cover"
/>

</div>

<div className="p-4 text-center">

<h3 className="font-semibold text-md mb-1">
{product.name}
</h3>

<p className="text-pink-500 font-medium">
{product.price}
</p>

</div>

</div>

))}

</div>

</section>

</div>

</div>

)
}