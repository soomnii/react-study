import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as _http from '../common/http';
import * as OkimokiConstant from '../common/constant';

import Header from '../component/Header';
import Item from '../component/Item';
import '../style/Main.css';

function Main() {
  const history = useHistory();

  const [list, setList] = useState([{
    id : 1,
    imgSrc : '1.png',
    title : 'Savage - The 1st Mini Album',
    singer : 'aespa'
  },
  {
    id : 2,
    imgSrc : '1.png',
    title : 'STAY',
    singer : 'The Kid LaRoL'
  },
  {
    id : 3,
    imgSrc : '2.svg',
    title : '신호등',
    singer : '이무진'
  },
  {
    id : 4,
    imgSrc : 'https://upload.wikimedia.org/wikipedia/ko/d/db/BTS_-_Butter.png',
    title : 'My Universe',
    singer : 'Coldplay&방탄소년단'
  },
  {
    id : 5,
    imgSrc : '',
    title : 'Next Level',
    singer : 'aespa'
  },
  {
    id : 6,
    imgSrc : '',
    title : '낙하(with아이유)',
    singer : 'AKMU'
  },
  {
    id : 7,
    imgSrc : '',
    title : 'Permission to love',
    singer : '방탄소년단'
  },
  {
    id : 8,
    imgSrc : '',
    title : '바라만 본다',
    singer : 'MSG워너비(MOM)'
  },
  {
    id : 9,
    imgSrc : '',
    title : 'Butter',
    singer : '방탄소년단'
  },
  {
    id : 10,
    imgSrc : '',
    title : '다정히 내 이름을 부르면',
    singer : '경서예지,전건호'
  }])

  useEffect(() => {
    console.log(list);
    getUserInfo()
  },[])

  const getUserInfo = () => {
    _http.get('/mg/getUserInfo')
    .then((res)=>{
        //setCompId(res.data.companyId);
        return res.data.companyId;
    })
    .then((res)=>{
        //getEmployeeList(res);
        history.push('')
    })
    .catch((err)=> {
        if( err !== undefined){
            let data = err.data; 
            if ( data.message === OkimokiConstant.HttpBodyContent.INVALID_TOKEN 
                || data.message === OkimokiConstant.HttpBodyContent.TOKEN_EXPIRED ){
                //토큰만료 or 검증오류
                history.push('/login');
            } else if ( data.status === 401) {
                //접근 권한이 없음
                alert('no authentication')
            }
        }
    });
}

  return (
    <div>
      <Header title="Main Page" subTitle="Sub Title" isShowBack="false"></Header>
      <div className="Main">
        <table>
          {list.map((item, idx) => (
            <Item key={idx} data={item} id={idx}></Item>
          ))}
        </table>
      </div>
    </div>
    
  );
}

export default Main;
