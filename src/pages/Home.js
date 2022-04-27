import { Link } from 'react-router-dom' 

const Home = () => {
  return (
    <div>
      <h1>KB 4조</h1>
      <p>프로젝트 홈페이지 입니다</p>
      {/* 로그인 페이지로 가는 링크 */}
      <button><Link to ="/login">로그인하기</Link></button>
    </div>
  );
};

export default Home;