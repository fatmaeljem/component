import React from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Col,Row} from 'react-bootstrap';

import Address from './Component/Profile/Address'
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Address/>
      <ProfilePhoto/></div>
  );

}
export default App;

