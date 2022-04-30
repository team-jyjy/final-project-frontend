import { Link } from 'react-router-dom' 

const Home = () => {
  return (
    <div>
      <h1>KB 4조</h1>
      <p>프로젝트 홈페이지 입니다</p>
      {/* 로그인 페이지로 가는 링크 */}
      <button><Link to ="/Signin">로그인하기</Link></button>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;