import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as _http from '../common/http';

import Header from '../component/Header';
import '../style/Main.css';

function Detail() {
  const history = useHistory();

  useEffect(() => {
  },[])

  return (
    <div>
      <Header title="Detail" subTitle="DEtail Title" isShowBack="true"></Header>
      <div className="Detail">
        Detail
      </div>
    </div>
    
  );
}

export default Detail;
