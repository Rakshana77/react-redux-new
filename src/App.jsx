// App.js

import { Provider } from 'react-redux';
import Store from './Store.js';
import CartPage from './CartPage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CartPage />
      </div>
    </Provider>
  );
}

export default App;
