import Image from 'next/image'

export default function AuthorCard(){

  return (<>
    <div className={'relative w-48 h-48 mx-auto mt-5'}>
      <Image className={'rounded-full'} src={'/img/profile_pic.png'} alt={'author image'} fill />
    </div>
    <div className={'text-center'}>
      <p className={'font-semibold text-black mt-3 text-xl'}>Jacky Cyntia Seumo</p>
      <p className={'font-light text-neutral-500 text-sm -mb-1'}>@overcomewithchrist</p>
      <p className={'font-light text-neutral-500 text-sm '}>Jesus Follower - Anime Lover - Programmer</p>
    </div>

  </>)
}