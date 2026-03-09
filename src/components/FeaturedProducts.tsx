import Image from "next/image"
import Link from "next/link"

export default function ProductHighlights(){

return(

<section className="py-20 bg-pink-100">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-14">
Core Products
</h2>


{/* Silky Desserts */}

<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="flex justify-center">

<div className="relative w-full max-w-[320px] h-[220px] rounded-xl overflow-hidden shadow-md">

<Image
src="/products/silky-matcha.jpg"
alt="Silky Desserts"
fill
className="object-cover"
/>

</div>

</div>


<div>

<h3 className="text-2xl font-bold mb-4">
Silky Desserts
</h3>

<p className="text-gray-600 leading-relaxed mb-6">
Celebrated for their signature light and soft texture,
Silky Desserts are crafted to be delicious while remaining
gentle on the digestive system.
</p>

<Link
href="/products"
className="inline-block bg-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
>
View Silky Desserts
</Link>

</div>

</div>



{/* Silky Drinks */}

<div className="grid md:grid-cols-2 gap-12 items-center mt-16">

<div className="order-2 md:order-1">

<h3 className="text-2xl font-bold mb-4">
Silky Drinks
</h3>

<p className="text-gray-600 leading-relaxed mb-6">
Refreshing beverages designed to perfectly pair with
Silky Desserts so customers can enjoy sweetness
anytime and anywhere.
</p>

<Link
href="/products"
className="inline-block bg-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
>
View Silky Drinks
</Link>

</div>


<div className="flex justify-center order-1 md:order-2">

<div className="relative w-full max-w-[320px] h-[400px] rounded-xl overflow-hidden shadow-md">

<Image
src="/products/yakult-blue-citrus.jpg"
alt="Silky Drinks"
fill
className="object-cover"
/>

</div>

</div>

</div>


</div>

</section>

)

}