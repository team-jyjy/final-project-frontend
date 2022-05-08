import { useEffect, useState } from "react";
import item1 from "../../assets/images/foodschedule.jpg";
import item2 from "../../assets/images/health.jpg";
import item3 from "../../assets/images/calendar.jpg";
import item4 from "../../assets/images/finance.png"
import "./Parallax.css"
import 'animate.css';

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
        <div className="copy"><p>사진 업로드 하나로 <br></br>칼로리와 영양성분 정보를 <br></br>받아보세요</p></div>
        </div>
      </div>
      
      <div className="bg2Container animate__animated animate__lightSpeedInLeft animate__slower animate__infinite">
      <div
        className="bg2"
      >
        <div className="copy " >~~하세요<br></br> JYGY가 <br></br>정확한 운동량을 카운트 해드립니다</div>
        </div>
      </div>

      <p
        className="desc"
        style={{
          transform: `translateX(${-position/2}px)`,
        }}
      >
        JYGY와 함께한 건강한 생활을 한눈에 확인하세요
      </p>


      <img className = "item3" src={item3} style={{
          opacity: (position - 900) / 50,
        }}>
      </img>

      <p
        className="desc2"
        style={{
          // transform: `translateX(${position}px)`,
          opacity: (position - 1900) / 100,
        }}
      >
        여기서 끝이냐구요?<br></br>
        금융 혜택이 <br></br>당신을 기다리고 있습니다.
      </p>
      <img className = "item4" src={item4} 
      style={{
        opacity: (position - 2100) / 100,
      }}></img>

      <p
        className="desc3"
        style={{
          opacity: (position - 2600) / 50,
        }}
      >
        자신과의 싸움,
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 2750) / 50,
        }}
      >
        더 이상 지지 않을 당신을
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 2900) / 50,
        }}
      >
        JYGY합니다.
      </p>
    </div>
  );
}