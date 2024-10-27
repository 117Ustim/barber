import Image1 from '../../img/footer/App-Store 1.png';
import Image2 from '../../img/footer/google-play.png';

export default function Footer() {
return (
<section className="footer __container">
<div className="footer__block">
  <div className="footer__block-content">
    <div className="footer__block-content-block">
<div className="footer__block-image">
  <img src={Image1} alt="App-Store" />
  <img src={Image2} alt="Google-play" />
</div>
<div className="footer__block-text">Ring My barber is an Appointment Booking Software Solution for Independent barbers.</div> 

    </div>
   
  </div>

</div>
</section>
);
}