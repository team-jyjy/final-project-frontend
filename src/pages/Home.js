import { Link } from 'react-router-dom'
import Pricing from './Pricing' 
import FAQ from './FAQ'
import "./Home.css"
import styled from "styled-components"

const Home = () => {
  return (
    <div>
      <h1>KB 4조</h1>
      <p>프로젝트 홈페이지 입니다</p>
      {/* 로그인 페이지로 가는 링크 */}
      <button><Link to ="/Signin">로그인하기</Link></button>
      <button><Link to ="/Signup">회원가입하기</Link></button>

      <Pricing />

      <div className="faq">
        <p id="faqs">
          FAQS
        </p>
        <span id="qa">Q & A </span> <span id="about">about JYGY</span>
      </div>

      <FAQ />
      
    </div>

  );
};

export default Home;