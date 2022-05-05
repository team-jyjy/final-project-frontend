import { Link } from 'react-router-dom'
import Pricing from '../Pricing' 
import FAQ from '../FAQ'
import "./Home.css"
import styled from "styled-components"
import Parallax from "./Parallax"
import Main from './main'
const Home = () => {
  return (
    <div>
      <Main />
      
      <Parallax />

      <Pricing />

      <div className="faq">
        <p id="faqs"  style={{marginTop : 170, marginBottom : 20, fontFamily : 'EliceDigitalBaeum'}}>
          FAQS
        </p>
        <span id="qa" style={{fontFamily:'EliceDigitalBaeum'}}>Q & A </span> <span id="about" style={{fontFamily:'EliceDigitalBaeum'}}>about JYGY</span>
      </div>

      <FAQ />

    </div>

  );
};

export default Home;