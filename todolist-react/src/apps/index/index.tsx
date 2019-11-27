import renderRouterConfig from "@common/renderRouterConfig";
import { render, Art } from 'art';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import routerConfig from './routerConfig';
import Store from './store/index';

const CONTAINER = document.getElementById('root');

const store = Store({});
if (!CONTAINER) {
  throw new Error('当前页面不存在 <div id="root"></div> 节点.');
}

render(
  <Provider store={store} >
    <Router>
      <Switch>{renderRouterConfig(routerConfig)}</Switch>
    </Router>
  </Provider>
  , CONTAINER)
