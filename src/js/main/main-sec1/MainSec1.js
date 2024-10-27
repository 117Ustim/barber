import SmilingMale from '../../../img/boroda.png';
import { Link } from 'react-router-dom';


export default function MainSec1() {
  return (
    <div className='mainSec1 __container'>
      <div className='mainSec1__block1 '>
        <div className='mainSec1__block1-block '>
          <div className='mainSec1__block1-title  '>
            <div className='mainSec1__block1-title-title'>
              Unleash Your Handsome Potential Revive Your Look
            </div>
            <div className='mainSec1__block1-title-text'>
              Refined Artistry for the Modern Gentleman Where Every Cut Tells
              Your Unique Story
            </div>
          
            <Link underline='hover' color='inherit' to='/book_now'>
           <button className='mainSec1__block1-title-button'>Book now</button>
            </Link>
              
       
          </div>
        </div>

        <div className='mainSec1__block1-image'>
          <img src={SmilingMale} alt='' />
        </div>
      </div>
      <div className='mainSec1__block2'></div>
      <div className='mainSec1__block3'></div>
    </div>
  );
}
