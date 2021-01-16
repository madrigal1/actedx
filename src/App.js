import {useEffect} from 'react'
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import stage_bg from './assets/pictures/stage_bg.webp'
import title from './assets/pictures/title.png'
import speaker1 from './assets/pictures/speaker1.webp'



function App() {
 

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger); 
    
    gsap.to(".card_type1", {
      scrollTrigger: {
        trigger: "#header_ss_container",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
        pinSpacing:true
      },
      y:-1000,
     // transformOrigin: "left center", 
      ease: "none"
    });
  
    

  },[]);
  return (
    <div className="App">
      <div id="header_ss_container">
        <header id="header">
            <div className="title">
              <img src={title} alt="title"/>
              <span id="title_main">Author's Circle</span>
              <div id="title_vl"></div>
              <span id="title_subtitle">By Tedx</span>
            </div>
        </header>
        <section id="speakers_stage">
          <img id="stage_bg" src={stage_bg} alt="weird orange bg with distortion"/>
          <p id="stage_title_1">Creativity</p>
          <p id="stage_title_2">Unleashed</p>
        </section>
      </div>
   

        <div className="card_type1">
          <div className="card_header">
              <div className="ch_container">
              <div className="black_circle"></div>
              <span className="handle">@myfriendslvia</span>
              </div>
          </div>
          <div className="speaker_pic">
            <img src={speaker1} alt=""/>
          </div>
          <div className="speaker_desc"></div>
        </div>
        <div className="card_type1">
          <div className="card_header"></div>
          <div className="speaker_pic"></div>
          <div className="speaker_desc"></div>
        </div>
        <div className="card_type1">
          <div className="card_header"></div>
          <div className="speaker_pic"></div>
          <div className="speaker_desc"></div>
        </div>
    
    
      {/* Speaker Info */}
      
    

      {/* Speaker Info */}
      <section id="footer">
       
        <div className="square"></div>
      </section>
    
    </div>
  );
}

export default App;
