
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function App() {
  let post = '강남 우동 맛집';
  let [postTitle, b] = useState(['남자 코트 추천','여자 코트 추천','남여 코트 추천']);// state는 html에 자동으로 재렌더링 가능.
  let [rcmnd,rcmndPlus]=useState(0);//추천 버튼

  return (
    <div className="App">
      <div className="header-back">
        <h4>개인 블로그</h4>
      </div>
      <div className='list'>
        <h4>{ postTitle[0] } <span type="button" onClick={()=>{ rcmndPlus(rcmnd = rcmnd+1) }}>좋아요</span>{rcmnd}</h4>
        <p>12월 23일 발행</p>
      </div>
      <div className='list'>
        <h4>{ postTitle[1] }</h4>
        <p>12월 23일 발행</p>
      </div>
      <div className='list'>
        <h4>{ postTitle[2] }</h4>
        <p>12월 23일 발행</p>
      </div>
      {/* <h4>{ post }</h4>  */}
    </div>
  );
}

export default App;
