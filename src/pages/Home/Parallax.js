import { useEffect, useState } from "react";
import item1 from "../../assets/images/foodschedule.jpg";
import item2 from "../../assets/images/health.jpg";
import item3 from "../../assets/images/calendar.jpg";
import item4 from "../../assets/images/finance.png"
import "./Parallax.css"
import 'animate.css';
import ReactTypingEffectDemo from "./typing"
import { Link } from "react-router-dom";

export default function Parallax() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    //console.log(window.scrollY);
    // console.log(window.innerHeight, window.innerWidth);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="bg1Container">
      <div
        className="bg1"
        style={{
          // backgroundPositionY: position / 2,
          // backgroundPositionY: 'calc((position / 2)/window.innerHeight*100%)',
        }}
      >
        <div className="copy animate__animated animate__slideInRight animate__slower animate__infinite"><p>사진 업로드 하나로 <br></br>칼로리와 <br></br>영양 성분 정보를 <br></br>받아보세요</p></div>
        </div>
      </div>
      
      <div className="bg2Container ">
      <div
        className="bg2"
      >
        <div className="copy animate__animated animate__slideInLeft animate__slower animate__infinite" >~~하세요<br></br> JYGY가 <br></br>정확한 운동량을 카운트 해드립니다</div>
        </div>
      </div>

    <div className="">
      <p className="desc animate__animated animate__fadeIn animate__slower animate__delay-4s animate__infinite">
        JYGY와 함께한 건강한 생활을 <br></br>한눈에 확인하세요
      </p>

        <div className="item3Container">
          <img className = "item3" src={item3} 
          // style={{
          //     opacity: (position - 900) / 50,
          //   }}
            >
          </img>
        </div>
      </div>

      <div className="">
        <p className="desc2 animate__animated animate__fadeIn animate__slower animate__delay-4s animate__infinite">
          여기서 끝이냐구요?<br></br>
          금융 혜택이 <br></br>당신을 기다리고 있습니다.
        </p>
        <div className="item4Container">
          <img className = "item4" src={item4}>
          </img>
          <Link to={"/product"}>
          <button id="productlink" sx={{bgcolor:'#9509fe'}}>
            <div>상세 페이지</div>
          </button>
          </Link>
        </div> 
      </div>

      {/*  */}
      <ReactTypingEffectDemo />
    </div>
    
  );
}