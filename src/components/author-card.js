import Image from 'next/image'

export default function AuthorCard(){

  return (<>
    <div> <Image src={'/img/profile_pic.png'} alt={'author image'} width={300} height={300}/> </div>
    <div>
      <p>Jacky Cyntia Seumo</p>
      <p>@overcomewithchrist</p>
      <p>Jesus Follower - Anime Lover - Programmer</p>
    </div>

  </>)
}