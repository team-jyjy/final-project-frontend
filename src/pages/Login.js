import {useLocation, useSearchParams} from 'react-router-dom';

const Login = () => {
  //useLocation : location객체(현재 사용자가 보고있는 페이지의 정보를 지님) 반환하는 hook
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');
  
  const onToggleDetail = () => {
    setSearchParams({mode, detail : detail === 'true' ? false : true});
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({mode : nextMode, detail});
  };
  return (
    <div>
      <h1>여긴 아마</h1>
      <p>로그인 페이지로 쓸거에용</p>
      <p>detail : {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default Login;