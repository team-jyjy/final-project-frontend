import {Outlet, useNavigate} from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    navigate('/articles', {replace : true});
  };

  return (
    <div className='wrap'>
        <header >
        </header>
        <main>
          <Outlet>
          </Outlet>
        </main>
        {/* <footer style={{background : 'lightgray', padding:16, fontSize:24}}> 
        <button onClick={goBack}>뒤에 </button>
        <button onClick={goArticles}>게시글 dpd</button>
        </footer> */}
        <footer className="site-footer">
        <div className="container" id="bt">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">KB IT'S YOUR LIFE 4조 TEAM JYGY<br></br><i>김한결 박서영 임민정 정유정 최유연<br></br></i> support@jygy.com <br></br>전화번호: 420-95-414-319-329 </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">팀 지지</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">지지 합류하기</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">공지사항</a></li>
                <li><a href="http://scanfcode.com/contact/">자주묻는 질문</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">이용약관</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">개인정보처리방침</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">© JYGY. All Rights Reserved 
                {/* <a href="#">Scanfcode</a>. */}
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;