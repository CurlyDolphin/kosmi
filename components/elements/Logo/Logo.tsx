import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo__img' src='/img/logo.png' alt='Kosmi Logo' />
  </Link>
)

export default Logo
