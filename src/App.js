import {useEffect} from 'react'
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import stage_bg from './assets/pictures/stage_bg.webp'
import title from './assets/pictures/title.png'
import speaker1 from './assets/pictures/speaker1.webp'
import {BsArrowUpRight} from 'react-icons/bs'
import {IconContext} from 'react-icons'



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
      y:-800,
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
            <div className="register_btn">
              <span>Register</span>
              <IconContext.Provider value={{ color: "black"}}>
              <BsArrowUpRight/>
              </IconContext.Provider>
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
          <div className="speaker_info">
            <h1 className="speaker_name">Sylvia</h1>
            <span className="speaker_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure maiores quos illo quia! Architecto alias odio magnam vero aliquam!
            </span>
          </div>
        </div>
        <div className="card_type1">
          <div className="card_header">
             <div className="ch_container">
                <div className="black_circle"></div>
                <span className="handle">@chetanbhagat</span>
              </div>
          </div>
          <div className="speaker_pic">
            <img src="https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/37551462_205576046977748_5207059345686134784_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_ohc=hV9yF4XcJIgAX9C-3dn&tp=1&oh=4468c29937c504f387ea3fcf7e72b74f&oe=602D79FE" alt=""/>
          </div>
          <div className="speaker_info">
            <h1 className="speaker_name">Chetan Bhagat</h1>
            <span className="speaker_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure maiores quos illo quia! Architecto alias odio magnam vero aliquam!
            </span>
          </div>
        </div>
        <div className="card_type1">
          <div className="card_header">
          <div className="ch_container">
                <div className="black_circle"></div>
                <span className="handle">@rickriordan</span>
              </div>
          </div>
          <div className="speaker_pic">
            <img src="https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119070998_127386335746682_936085938337847283_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_ohc=Di3SbRUYd-IAX-OFlgK&tp=1&oh=d98247a1955ffd3d0a6a89b1df4360dd&oe=602A5161" alt=""/>
          </div>
          <div className="speaker_info">
           <h1 className="speaker_name">Rick Riordan</h1>
            <span className="speaker_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure maiores quos illo quia! Architecto alias odio magnam vero aliquam!
            </span>
          </div>
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
