import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+79044038112'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +7 (904) 403 81 12
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://vk.com/kosmieparfum'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.vk}
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems
