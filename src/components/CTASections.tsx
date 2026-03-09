import Link from "next/link"

export default function CTASection(){

return(

<section className="bg-pink-500 py-16">

<div className="max-w-4xl mx-auto text-center text-white">

<h2 className="text-3xl font-bold mb-4">

Ready To Try Our Desserts?

</h2>

<p className="mb-6">

Discover the taste loved by thousands of customers.

</p>

<Link
href="/products"
className="inline-block bg-white text-pink-500 px-6 py-3 rounded-lg font-semibold hover:bg-pink-100 transition"
>

View Our Products

</Link>

</div>

</section>

)

}