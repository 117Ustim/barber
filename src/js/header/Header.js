import Logo from '../../img/Barber-Logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className='header __container'>
      <div className='header__block '>
        <div className='header__block-block'>
          <div className='header__block-block__logo'>
            <img src={Logo} alt='Logo' />
          </div>
          <div className='header__block-block__menu'>
            <Link className='link' underline='hover' color='inherit' to='/'>
              <h5>HOME</h5>
            </Link>
            <Link
              className='link'
              underline='hover'
              color='inherit'
              to='/about'>
              <h5>ABOUT</h5>
            </Link>
            <Link
              className='link'
              underline='hover'
              color='inherit'
              to='/book_now'>
              <h5>BOOK NOW</h5>
            </Link>
            <Link className='link' underline='hover' color='inherit' to='/faq'>
              <h5>FAQ</h5>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
