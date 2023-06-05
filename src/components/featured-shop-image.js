import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedShopImage() {
  return (<>
    <div className={'relative mx-auto w-11/12 aspect-video mt-3 mb-10 drop-shadow-md'}>
      <Link className={'text-xl text-white font-bold mx-3'} href={'/shop'}>
        <Image className={'rounded-3xl'} src={'/img/shop/Graphic_king_jesus_white_bg.jpg'} alt={'featured image'} fill />
      </Link>
    </div>
  </>)
}
