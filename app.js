import React from 'react';
import ReactDOM from 'react-dom';
import { addCity, deleteCity } from './store';
import { Provider } from 'react-redux';

import Root from './root';
import store from './store';

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('app'));

console.log(store);

store.dispatch(addCity('Kharkiv'));
store.dispatch(addCity('London'));
store.dispatch(addCity('Kyiv'));
