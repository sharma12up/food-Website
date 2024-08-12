import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import PaymentMethods from './PaymentMethods';
const App = () => {  
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home></Home>} ></Route>
        <Route path='/basic'element={<PaymentMethods></PaymentMethods>} ></Route>
      </Routes>
    </div>
  )
}
export default App