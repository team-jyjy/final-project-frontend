import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  return (
    <div>
      {/* 페이지끼리 공통적으로 보여줘야하는 레이아웃 -> 컴포넌트 한번만 만들면 됨!*/}
      <Outlet></Outlet>
      <ul>
        <li>
          <NavLink to="/articles/1" style={({isActive})=>(isActive ? activeStyle : undefined)}>게시글 1</NavLink>
        </li>
        <li>
        <NavLink to="/articles/2" style={({isActive})=>(isActive ? activeStyle : undefined)}>게시글 2</NavLink>
        </li>
        <li>
        <NavLink to="/articles/3" style={({isActive})=>(isActive ? activeStyle : undefined)}>게시글 3</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;