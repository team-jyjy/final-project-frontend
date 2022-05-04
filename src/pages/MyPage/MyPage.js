import Identity from "./Identity"
import Finance from "./Finance"
import Graph from "./Graph"
import {Link} from 'react-router-dom'

const MyPage = () => {
  return (
    <div>
      <Identity />
      <Finance />
      <Graph />
    </div>
  );
};

export default MyPage;