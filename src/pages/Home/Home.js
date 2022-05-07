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
        <p id="faqs"  style={{marginTop : 170, marginBottom : 20, fontFamily : 'EliceDigitalBaeum', color:'#146152'}}>
          FAQS
        </p>
        <span id="qa" style={{fontFamily:'EliceDigitalBaeum', color:'#146152'}}>Q & A </span> <span id="about" style={{fontFamily:'EliceDigitalBaeum', color:'#146152'}}>about JYGY</span>
      </div>

      <FAQ />

    </div>

  );
};

export default Home;