import {useRef,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import ScrollMagic from 'scrollmagic'

import {TweenMax,Power3} from 'gsap';
function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(()=>{
    // console.log(logoItem);
    // logoItem.current.style.display ="none";
    // TweenMax.to(logoItem.current,.8,{
    //   opacity:1,
    //   y:-20,
    //   ease:Power3.easeOut,
    // });
    // TweenMax.to(textItem.current,.8,{
    //   y:-60,
    //   ease:Power3.easeOut,
    //   delay:.2
    // })
    const controller = new ScrollMagic.Controller();
    const scence = new ScrollMagic.Scene({
      triggerElement:"#speakers"
    });

  },[]);
  return (
    <div className="App">
      <header>
        
      </header>
      <section id="speakers">
        <p>First</p>
      </section>
      <section>
        <p>Second</p>
      </section>
    </div>
  );
}

export default App;
