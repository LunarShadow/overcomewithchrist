import {useContext, useEffect, useMemo, useState} from 'react'
import {PostListContext} from '@/context/post-list-context'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedPostCard() {
  const {postList} = useContext(PostListContext)
  const [url, setUrl] = useState('')
  const [slug, setSlug] = useState('')
  const featuredPost = useMemo(() => postList?.[0], [postList])

  useEffect(() => {
    if (featuredPost) {
      setUrl(`/${featuredPost?.details?.featuredImage}`)
      setSlug(`/posts/${featuredPost?.slug}`)
    }
  }, [featuredPost])

  return (<>
    <div className={'relative mx-auto w-11/12 md:w-2/3 aspect-video border-1 border-amber-500 my-10 drop-shadow-md cursor-pointer'}>
      <Link className={'text-xl text-white font-bold'} href={slug}>
        <Image className={'rounded-3xl '} src={url} alt={'featured image'} fill />
        <div className={'gradient-background rounded-3xl absolute z-10 w-full h-2/3 bottom-0'}>
          <div className={'absolute w-full bottom-0 pb-5 pl-6'}>
            {featuredPost?.details?.title}
          </div>
        </div>
      </Link>
    </div>
  </>)
}

