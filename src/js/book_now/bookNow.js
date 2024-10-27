import Header from './../header/Header';
import Barber1 from '../../img/bookNow/Barber1.png';
import Barber2 from '../../img/bookNow/Barber2.png';
import Barber3 from '../../img/bookNow/Barber3.png';
import Footer from './../footer/Footer';

export default function BookNow() {
  return (
    <div className='bookNow __container'>
      <Header />

      <div className='bookNow__block'>
        <div className='bookNow__block-content'>
          <div className='bookNow__block-content-image_image'>
            <img src={Barber1} alt='Barber1' />
          </div>

          <div className='bookNow__block-content-block-title'>
            <nav>
              <ul className='nav__ul'>
                <li className='nav__li'>Cut & Shave 35 CAD and up 25 </li>
                <li className='nav__li'>Minutes Haircut 30 CAD and up 25</li>
                <li className='nav__li'>
                  Minutes Line-Up 15 CAD and up 10 minutes
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='bookNow__block-content-block-image-name'>
          Calvin Trende | Barber
        </div>

        <button className='bookNow__block-content-block-button'>
          Book now
        </button>

        <div className='bookNow__line'></div>

        <div className='bookNow__block-content'>
          <div className='bookNow__block-content-image_image'>
            <img src={Barber2} alt='Barber2' />
          </div>

          <div className='bookNow__block-content-block-title'>
            <nav>
              <ul className='nav__ul'>
                <li className='nav__li'>10 XCD and up, 30 minutes </li>
                <li className='nav__li'>Kids Regular Cut 10 XCD and up, 30 minutes</li>
                <li className='nav__li'>
                Secondary School Haircut 15 XCD and up, 30 minutes
                </li>
                <li className='nav__li'>
                Kids Fade With Design
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='bookNow__block-content-block-image-name'>
        Sean Prospère | Barber
        </div>

        <button className='bookNow__block-content-block-button'>
          Book now
        </button>

        <div className='bookNow__line'></div>

        <div className='bookNow__block-content'>
          <div className='bookNow__block-content-image_image'>
            <img src={Barber3} alt='Barber3' />
          </div>

          <div className='bookNow__block-content-block-title'>
            <nav>
              <ul className='nav__ul'>
                <li className='nav__li'>Haircut $25 and up, 30 minutes </li>
                <li className='nav__li'>Senior Haircut $21 and up, 20 minutes</li>
                <li className='nav__li'>
                Haircut & Beard Outline $37 and up, 35 minutes
                </li>
                <li className='nav__li'>
                Haircut, Beard Outline & Shaping
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='bookNow__block-content-block-image-name'>
        Joseph Davies | Barber
        </div>

        <button className='bookNow__block-content-block-button'>
          Book now
        </button>

        <div className='bookNow__line'></div>
        <Footer/>
      </div>
      
    </div>
    
  );
}
