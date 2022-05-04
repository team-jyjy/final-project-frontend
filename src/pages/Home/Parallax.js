import { useEffect, useState } from "react";
import item1 from "../../assets/images/salad.jpg";
import item2 from "../../assets/images/health.jpg";
import item3 from "../../assets/images/calendar.jpg";
import item4 from "../../assets/images/finance.png"
import "./Parallax.css"

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
      <div
        className="bg bg1"
        style={{
          backgroundPositionY: position / 2,
          // backgroundPositionY: 'calc((position / 2)/window.innerHeight*100%)',
        }}
      >
        <div>식단을 관리하세요</div>
      </div>
      
      <div
        className="bg bg2"
        style={{
          backgroundPositionY: position / -3,
        }}
      >
        <div>운동을 통해 목표를 달성하세요</div>
      </div>

      <p
        className="desc"
        style={{
          transform: `translateX(${-position/2}px)`,
        }}
      >
        나의 관리 현황을 캘린더를 통해<br></br>
        기록하고 친구들과 공유해 보세요
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
      {/* <img
        src={item1}
        className="item"
        alt=""
        style={{
          transform: `translateY(${position / 2}px)`,
        }}
      /> */}
      {/* <img
        src={item2}
        className="item item_snow"
        alt=""
        style={{
          transform: `translateY(${position / 4}px)`,
        }}
      /> */}
    </div>
  );
}