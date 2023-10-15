export async function generateStaticParams(){
  // const posts = await fetch('http://.../post').then((res)=> res.json())
const posts = [
  {
    id: 0,
    slug: '1a1'
  },
  {
    id: 1,
    slug: 'vea'
  },
]

return posts.map((post)=> ({
  slug: post.slug,
}))

}

export default function Page({params}){
  return (
    <div className="">
      My Post: {params.slug}
    </div>
  )
}