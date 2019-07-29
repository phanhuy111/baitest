import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from

// const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// );


ReactDOM.render(
    // <Provider store={store}>
    <App />
    // {/* </Provider> */}
    , document.getElementById('root'));
registerServiceWorker();
