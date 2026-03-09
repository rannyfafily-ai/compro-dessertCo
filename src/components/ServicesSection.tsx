export default function ServicesSection(){

const services = [

{
title:"Dessert Catering",
desc:"Custom dessert packages for weddings and events",
price:"Starting $150"
},

{
title:"Corporate Gift Boxes",
desc:"Premium dessert gift sets for companies",
price:"Starting $50"
},

{
title:"Retail Desserts",
desc:"Available in stores nationwide",
price:"From $10"
}

]

return(

<section className="py-20 bg-pink-50">

<div className="max-w-7xl mx-auto px-6 py-16">

<h2 className="text-3xl font-bold text-center mb-10">

Our Products

</h2>

<div className="grid md:grid-cols-3 gap-8">

{services.map((s,i)=>(
<div key={i} className="bg-white p-6 rounded-xl shadow-sm">

<h3 className="text-xl font-semibold mb-3">
{s.title}
</h3>

<p className="text-gray-600 mb-4">
{s.desc}
</p>

<p className="text-pink-500 font-bold">
{s.price}
</p>

</div>
))}

</div>

</div>

</section>

)
}