import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
            <App />
    </Provider>
);
