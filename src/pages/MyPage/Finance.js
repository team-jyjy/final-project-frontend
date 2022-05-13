import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import "./Finance.css"
const Finance = () => {
  return (
    <div className='Container2'>
      <div className='finance'>
        <div className='graph'>
        <CircularProgress value={40} color='purple' size='230' thickness={15}>
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
        </div>
        <div className='ment'>
          <br></br>
          <span className='name'>최유연</span><span>님<br></br></span>
          <span className='day'>7</span>일 더 성공하면<br></br>
          우대금리를 <span className='percent'>0.5</span>% 더<br></br>
          적용받을 수 있어요!
        </div>
      </div>
    </div>
  );
};

export default Finance;