import { useEffect } from 'react';
import { useHistory } from 'react-router';
import '../style/Item.css';

function Item(props) {
  const history = useHistory();

  useEffect(()=> {
    console.log(props.data)
  }, [])

  const goToDetail = (id) => {
    history.push('/detail?'+id)
  }
  return (
  <>
    <tr onClick={() => goToDetail(props.id)}>
      <td className="sidx">{props.id}</td>
      <td className="simage"><img src={`img/${props.data.imgSrc}`}></img></td>	
      <td className="stitle">{props.data.title}</td>
      <td className="singer">{props.data.singer}</td>	
    </tr>
  </>
    
    
  );
}
//<img src={`../img/${props.data.image}`}></img>
export default Item;
