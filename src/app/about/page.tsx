export default function About() {

const founders = [
  {
    name: "Adrian Agus",
    role: "Co-Founder",
    bio: "As the strategic force behind the brand, Adrian focuses on Puyo’s vision to become a world-class F&B icon while ensuring the company maintains the highest standards of excellence."
  },
  {
    name: "Eugenie Patricia Agus",
    role: "Co-Founder",
    bio: "With a passion for innovation and quality, Eugenie led the product development phase, creating the unique 'light and soft' texture that Puyo is famous for."
  }
]

const culture = [
  {
    title: "A Place to Grow",
    desc: "We strive to be a great place to work where every team member is inspired and empowered to reach their full potential."
  },
  {
    title: "Remarkable Experiences",
    desc: "Our culture is obsessed with customer satisfaction, delivering happiness one customer at a time through exceptional service and high-quality products."
  },
  {
    title: "Social Responsibility",
    desc: "We are committed to making a positive impact on the communities we serve."
  },
  {
    title: "Guilt-Free Innovation",
    desc: "We promote health-conscious creativity. Our desserts are low in calories, contain no added preservatives, and are free of trans fats."
  }
]

return (

<div className="bg-pink-50 min-h-screen">

<div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

{/* Story Section */}

<section className="text-center max-w-4xl mx-auto">

<h1 className="text-4xl font-bold mb-6">
Our Story: A Silky Journey
</h1>

<p className="text-gray-600 leading-relaxed mb-6">
In July 2013, siblings Adrian Agus and Eugenie Patricia Agus embarked on a collaborative mission to redefine the F&B landscape in Indonesia. After months of meticulous experimentation with premium ingredients, they perfected the recipes for what would become their signature offerings: <span className="font-semibold">Silky Desserts</span> and <span className="font-semibold">Silky Drinks</span>.
</p>

<p className="text-gray-600 leading-relaxed mb-6">
The Puyo story began modestly through online sales and local bazaars in Jakarta. However, the overwhelming response from the community led to the opening of their first physical outlet in September 2013.
</p>

<p className="text-gray-600 leading-relaxed">
Driven by hard work and the loyalty of the <span className="font-semibold text-pink-500">#PuyoPeople</span>, Puyo has achieved remarkable milestones, expanding to more than 90 outlets across Jakarta, Bandung, Surabaya, and beyond.
</p>

</section>


{/* Founders Section */}

<section>

<h2 className="text-3xl font-bold text-center mb-12">
Meet the Visionaries
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

{founders.map((f, i) => (

<div
key={i}
className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
>

<div className="w-28 h-28 bg-pink-200 rounded-full mx-auto mb-6"/>

<h3 className="font-bold text-xl">
{f.name}
</h3>

<p className="text-pink-500 text-sm mb-4">
{f.role}
</p>

<p className="text-gray-600 text-sm leading-relaxed">
{f.bio}
</p>

</div>

))}

</div>

</section>


{/* Culture Section */}

<section>

<h2 className="text-3xl font-bold text-center mb-12">
Our Team & Culture
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{culture.map((c, i) => (

<div
key={i}
className="bg-white p-8 rounded-xl shadow hover:shadow-md transition"
>

<h3 className="font-semibold text-lg mb-3 text-pink-500">
{c.title}
</h3>

<p className="text-gray-600 leading-relaxed">
{c.desc}
</p>

</div>

))}

</div>

</section>

</div>

</div>

)
}