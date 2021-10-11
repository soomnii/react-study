import { useHistory } from 'react-router';
import '../style/Header.css';

function Header(props) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
    <div className="Header">
      <div style={{marginTop: '10px'}}>
        {props.isShowBack === 'true' && 
          <div style={{float: "left"}}>
            <button className="backBtn" onClick={goBack}></button>
          </div>}
        <div className="title">{props.title}</div>
      </div>
      <span className={props.isShowBack === 'true'? "sub-title back" : "sub-title"}>{props.subTitle}</span>
    </div>
  );
}

export default Header;
