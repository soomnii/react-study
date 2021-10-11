import { Route, Redirect, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import './style/App.css';

function App() {
  const paths = ['/', '/statistics', '/analysis', '/sysFault', '/zone', '/store',
    '/customer', '/enterprise', '/manager', '/admin', '/qr', '/calculation',
    '/notitalk', '/calculate', '/transaction', '/point', '/dashboard', '/innerError', '/error403', '/error500'];

  return (
    <>
      {/* <div className={`App`}>
        <Switch>
          <Route exact path={paths} render={props => (
            localStorage.getItem('token')
              ? <Route path={paths} component={Main} exact={true} />
              : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )} />
          <Route path="/login" component={Login}/>
          <Route component={Error404} />
        </Switch>
      </div>   */}
      <div className={`App`}>
        <Route path="/" component={Main}  exact={true}/>
        <Route path="/detail" component={Detail}  exact={true}/>
      </div>
    </>
      
  );
}

export default App;
