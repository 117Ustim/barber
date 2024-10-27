import Image1 from '../../../img/mainSec4/barber-shop-decor-ideas 1.jpg';
import Image2 from '../../../img/mainSec4/Barber-Shop-Barber-7-Barber-Shop 1.jpg';
import Image3 from '../../../img/mainSec4/barber_masthead 1.jpg';

export default function MainSec4() {
  return (
    <section className='mainSec4 __container'>
      <div className='mainSec4__block'>
        <div className='mainSec4__block-image'>
          <img src={Image1} alt='barber-shop-decor-ideas' />
          <img src={Image2} alt='barber-shop-decor-ideas' />
          <img src={Image3} alt='barber-shop-decor-ideas' />
        </div>
        <div className='mainSec4__block-content'>
          <div className='mainSec4__block-content-block'>
            <div className='mainSec4__block-content-title'>
              What is a barber?
            </div>
            <div className='mainSec4__block-content-text'>
              Whether it’s a latest in style fade or a neat beard trimming, as a
              barber, it’s your job to make sure your clients look sharp and
              stylish. You’ve got an eye for detail and precision is your middle
              name. Barbers work on your hair.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
