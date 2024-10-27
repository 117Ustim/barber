import Header from "../header/Header";
import Barber from '../../img/mainSec1/Smiling-Male-Barber-with-shaver 1.png';
import Image1 from "../../img/faq/about_01 1.svg";
import Image2 from "../../img/faq/faq-2.svg";
import Image3 from "../../img/faq/faq-3.svg";
import Footer from './../footer/Footer';



export default function Faq() {
return (
<section className='faq __container'>
<Header/>
<div className="faq__block">
  <div className="faq__block-image">
    <img src={Barber} alt="Barber" />
  </div>
  <div className="faq__block-content1">
   <div className="faq__block-content1-block">
    <div className="faq__block-content1-block-image">
     <div className="faq__line1"></div>
     <div className="faq__line2"></div>  
      <img src={Image1} alt="Image1" />
    </div>
    <div className="faq__block-content1-block-text">
    There are many good masters who can make you a stylish hairstyle. But only units will do it the way you need it to. You can find such a person here. Not just a barber, but a close friend.<br></br>You will understand what we are talking about when you get to one of our masters. He will carefully listen to all your wishes and make the haircut you have always dreamed of. Or you can trust his professionalism to get a unique style that will perfectly fit into your image.
    </div>
    </div> 
  </div>
  <div className="faq__block-content2">
 
  <div className="faq__block-content2-block">
  
    
    <div className="faq__block-content2-block-text">Currently, there are more than 100 professional Barbers working in the Lumberjack network. A large part of them came to us already with considerable work experience, but many were trained at our school. This best characterizes the atmosphere of our institution.<br></br>In addition to training at the Lumberjack school, our employees regularly attend master classes at other well-known barbershops, learning and sharing experience with colleagues. And it bears fruit. Many of our barbers are nominees for prizes at competitions in Ukraine and around the world.<br></br>For example, the art director of the branch in the Pechersk district, Maksym. After winning the international competition of long haircuts, he underwent a 14-day training in one of the oldest and most famous barbershops in Europe: Schorem, Haarsnijder & Barbier - Old school barbershop / school.</div>
    
    <div className="faq__block-content2-block-image">
      
      <img src={Image2} alt="Image2" />
      <img src={Image3} alt="Image3" />
      <div className="faq__line3"></div> 
      <div className="faq__line4"></div> 
    </div>
    
    </div> 
   
  </div>
  
</div>

<Footer />
 </section>
);
}