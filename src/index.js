import React from 'react';
import ReactDOM from 'react-dom/client';
// import Lifecycle from './basic/Lifecycle';
// import { Map } from './basic/Map';
// import App from './App';
// import StateProps from './basic/StateProps';
// import { Variable } from './basic/Variable';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Crud />
  </React.StrictMode>
);
