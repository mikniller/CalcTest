import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import configeStore from './store/configureStore';  
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';  
import { initialState } from './reducers';
import { chartElement } from './components/Chart';


const store = configeStore(initialState);

ReactDOM.render(
    <div>
      <Provider store={store}>
        <App />
        </Provider>
    
       </div>
         , 
    document.getElementById('root'));



