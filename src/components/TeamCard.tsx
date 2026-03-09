export default function TeamCard({user}:any){

return(

<div className="text-center bg-white shadow p-6 rounded-xl">

<img
src={user.picture.large}
className="w-24 h-24 rounded-full mx-auto"
/>

<h3 className="mt-4 font-bold">

{user.name.first} {user.name.last}

</h3>

<p className="text-gray-500 text-sm">

Team Member

</p>

</div>

)
}