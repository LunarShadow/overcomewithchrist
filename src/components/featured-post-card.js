import {useContext, useMemo} from 'react'
import {PostListContext} from '@/context/post-list-context'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedPostCard(){
  const { postList } = useContext(PostListContext)
  const featuredPost = useMemo(
    () => postList?.[0],
    [postList]
  )

  return(<>
    <div>
      <Image src={`/${featuredPost?.details?.featuredImage}`} alt={'featured image'} width={300} height={300} />
      <Link href={`/posts/${featuredPost?.slug}` || ''}>{featuredPost?.details?.title}</Link>
    </div>
  </>)
}

