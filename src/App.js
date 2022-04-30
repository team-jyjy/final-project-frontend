import { Route, Routes } from "react-router-dom";
import Layout from './Layout'
import Signin from './pages/LogIn/Signin';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import MyPage from "./pages/MyPage"
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
      {/* index : path="/" 명시적 표시 */}
        <Route index element={<Home />}/>
        <Route path="/signin" element = {<Signin />} />
        <Route path="/mypage" element = {<MyPage />} />
        <Route path="/profiles/:username" element={<Profile />}/>
      </Route>
      {/* 중첩된 라우터 */}
      <Route path="/articles" element = {<Articles />}>
        <Route path=":id" element = {<Article />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;