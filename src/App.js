import logo from './logo.svg';
import './App.css';
import MainComponent from "./Components/MainComponent";
import './assets/styles/style.scss'
import {useEffect, useState} from "react";

function App() {

    const [isLoading, setLoading] = useState(true);
    const [tailLeft, setTailLeft] = useState(window.innerWidth/2);
    const [tailTop, setTailTop] = useState(window.innerWidth/2);
    const [tailOpacity, setTailOpacity] = useState(0);

    useEffect(() => {

        fakeRequest().then(() => {
            const el = document.querySelector(".page-loader-wrapper");
            if (el) {
                el.remove();
                setLoading(!isLoading);
            }
        });

        window.addEventListener('mousemove', moveTail)

        return () => { window.removeEventListener('mousemove', moveTail) }
    }, []);

    function fakeRequest() {
        return new Promise(resolve => setTimeout(() => resolve(), 1000));
    }

    const moveTail = (e) =>{
        setTailLeft(e.pageX+5);
        setTailTop(e.pageY+5);
        setTailOpacity(1);
    }

    if (isLoading) {
        return null;
    }

  return (
      <>
        <MainComponent/>
        <div className="mouseTail" style={{left: tailLeft+"px", top:tailTop+"px", opacity:tailOpacity}}/>
          {/*<img src="https://website-visits-counter.glitch.me/pixel.svg"  className="display-none"  alt=""/>*/}
      </>
  );
}

export default App;
