import Header from '../header/Header';
import Barber from '../../img/mainSec1/Smiling-Male-Barber-with-shaver 1.png';
import Footer from './../footer/Footer';

export default function About() {
  return (
    <section className='About __container'>
      <Header />
      <div className='about__block'> </div>
      
        <div className='about__block-image'>
          <img src={Barber} alt='Barber' />
        </div>
       
        <div className='about__block-content'>
         
          <div className='about__block-text'>
          <div className='about__line1'></div>
           <div className='about__line2'></div>
          <span>What is Ring My Stylist?</span><br></br>
            Ring My Stylist is an Appointment Booking App specifically made for
            Independent Stylists to effectively manage every aspect of their
            business with relative ease.<br></br>
            <br></br>
            <br></br>
            <span>What type of businesses can I manage with Ring My Stylist?</span>
            <br></br>
            The app is tailored to suit the management needs of each and every
            Independent Stylists. This includes, but not limited to, Hair
            Stylist, Esthetician, Makeup Artist, Skincare Specialist, Nail
            Artist, Hairdresser, Fashion Designer, Barber, Tattoo Artist,
            Masseuse, Image Consultant/Stylist, Foot Masseuse, Body Piecer,
            Manicurist, Eyelash Technician, Photo and Film Stylist and Bridal
            Make-Up Specialists - whether working independently in salons,
            renting booths or mainly rendering home services.<br></br>
            <br></br>
            <br></br>
            <span>
              What aspects of my business can be managed by Ring My Stylist?
            </span>
            <br></br> The software solution can be used to manage virtually all
            areas of your stylist business. These includes; your client base,
            appointments, services, confirmations, reminders, daily schedule,
            special offers, referrals, calender sync and lots more!
            <br></br>
            <br></br>
            <br></br> <span>Is the app available in my language?</span> <br></br>
            Ring My Stylist is available in several languages which includes
            English, Spanish, Italian as well as Portuguese.<br></br>
            <br></br>
            <br></br><span>What are the benefits of using Ring My Stylist?</span> <br></br>
            The software solution provides both Stylists and their clients with
            a wide array of benefits. These includes easy scheduling, ability to
            send friendly automatic reminders to help reduce no-shows, gain
            total control over services and pricing, staying organized and
            professional, provide clients with a convenient online method to
            reschedule appointments, improve and maintain your high standard of
            delivery, customize everything to match the look and feel of your
            business!
          </div>
        </div>
     
      <Footer />
    </section>
  );
}
