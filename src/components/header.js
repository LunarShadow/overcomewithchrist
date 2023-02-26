import {useState} from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [{
    name: 'Home', url: '/'
  }, {
    name: 'Shop', url: '/shop'
  }, {
    name: 'All Posts', url: '/posts'
  }, {
    name: 'About Me', url: '/about'
  }, {
    name: 'Salvation', url: '/salvation'
  }, {
    name: 'Instagram', url: 'https://www.instagram.com/overcomewithchrist'
  }, {
    name: 'Youtube', url: 'https://www.youtube.com/@overcomewithchrist'
  }]

  return (<>
    {/*Menu toggle button*/}
    <div className={'grid grid-cols-4 gap-4 px-5 bg-white py-2'}>
    <button type={'button'} onClick={() => setIsOpen(!isOpen)}>
      <span className="sr-only">Open menu</span>
      {/*Show hamburger menu if menu isn't open*/}
      {!isOpen && <svg viewBox={'0 0 24 24'} height="40" width="40">
        <line x1="5" y1="5" x2="19" y2="5" rx={'2'} stroke={'#FFB284'} strokeWidth={'2'} />
        <line x1="5" y1="10" x2="19" y2="10" rx={'2'} stroke={'#FFB284'} strokeWidth={'2'} />
        <line x1="5" y1="15" x2="19" y2="15" rx={'2'} stroke={'#FFB284'} strokeWidth={'2'} />
      </svg>}
      {/*Show X if menu is open*/}
      {isOpen && <svg viewBox={'0 0 24 24'} height="40" width="40">
        <line x1="5" y1="5" x2="19" y2="19" rx={'2'} stroke={'#FFB284'} strokeWidth={'2'} />
        <line x1="19" y1="5" x2="5" y2="19" rx={'2'} stroke={'#FFB284'} strokeWidth={'2'} />
      </svg>}
    </button>
      <div className={'flex items-center col-span-2'}>
        <p className={'text-xl text-primary font-semibold '}>Overcome With Christ</p>
      </div>
    </div>
    {/*Menu items*/}
    <div className={`nav-items-container ${isOpen ? 'block openMenu' : 'hidden'}`}>
      {menuItems?.map((menuItem) => (<Link href={menuItem.url} key={menuItem.name}>
          {menuItem.name}
        </Link>))}
    </div>
  </>)
}