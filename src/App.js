import { Route, Routes } from "react-router-dom";
import Header from './pages/components/common/Header'
import Footer from './pages/components/common/Footer'
import Signin from './pages/LogIn/Signin';
import Signup from './pages/LogIn/Signup';
import Home from './pages/Home/Home'
import MyPage from "./pages/MyPage/MyPage"
import NotFound from "./pages/NotFound";
import './pages/components/common/Header.css';
import Responsive from "./pages/responsive"
import Foodschedule from "./pages/main/DLModel/foodschedule"
import Product from "./pages/main/Product"
import Calendar from "./pages/main/Calendar"

const App = () => {
  return (
      <Routes>
        <Route element={<Header />}>
          <Route element={<Footer />}>
        {/* index : path="/" 명시적 표시 */}
          <Route index element={<Home />}/>
          <Route path="/signin" element = {<Signin />} />
          <Route path="/signup" element = {<Signup />} />
          <Route path="/mypage" element = {<MyPage />} />
          <Route path="/responsive" element = {<Responsive />} />
          <Route path="/foodschedule" element = {<Foodschedule/>}/>
          <Route path ="/calendar" element = {<Calendar/>}/>
          <Route path="/product" element = {<Product/>}/>
          {/* <Route path="/profiles/:username" element={<Profile />}/> */}
          </Route>
        </Route>
        {/* 중첩된 라우터 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
  );
};

export default App;