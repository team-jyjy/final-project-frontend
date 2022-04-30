import {Outlet, useNavigate} from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    navigate('/articles', {replace : true});
  };

  return (
    <div>
      <header >
      </header>
      <main>
        <Outlet>
        </Outlet>
      </main>
      <footer style={{background : 'lightgray', padding:16, fontSize:24}}> 
        <button onClick={goBack}>뒤에 </button>
        <button onClick={goArticles}>게시글 dpd</button>
      </footer>
    </div>
  );
};

export default Footer;