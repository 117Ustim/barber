import Articleimage from '../../../img/mainSec2/articleimage 1.png';

export default function MainSec2() {
  return (
    <section className='mainSec2 __container'>
      <div className='mainSec2__block1'>
        <div className='mainSec2__line2'></div>
        <div className='mainSec2__block1-block '>
          <div className='mainSec2__line'></div>
          {<div className='mainSec2__block1-image'>
            <img src={Articleimage} alt='Articleimage' />
          </div>}

          <div className='mainSec2__block1-title  '>
            <div className='mainSec2__block1-title-title'>
              Redefining Your Grooming Experience
            </div>
            <div className='mainSec2__block1-title-text'>
              Since 2020, the barbershop trend has been rising, witnessing a
              year-by-year increase. Especially in 2022, where it grew to a
              massive 42000 startups in the UK only! Out of these, about 83%
              were only in England.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
