import { useEffect, useState } from "react";
import item1 from "../../assets/images/salad.jpg";
import item2 from "../../assets/images/health.jpg";
import "./Parallax.css"

export default function Parallax() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    console.log(window.scrollY)
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
          transform: `translateX(${-position}px)`,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p
        className="desc2"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p
        className="desc3"
        style={{
          // 2000은 나중에 화면 구성 바껴지면 console.log찍어서 확인해야함.
          opacity: (position - 2000) / 100,
        }}
      >
        자신과의 싸움,
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 2150) / 50,
        }}
      >
        더 이상 지지 않을 당신을
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 2300) / 50,
        }}
      >
        JYGY합니다.
      </p>
      <img
        src={item1}
        className="item"
        alt=""
        style={{
          transform: `translateY(${position / 2}px)`,
        }}
      />
      <img
        src={item2}
        className="item item_snow"
        alt=""
        style={{
          transform: `translateY(${position / 4}px)`,
        }}
      />
    </div>
  );
}