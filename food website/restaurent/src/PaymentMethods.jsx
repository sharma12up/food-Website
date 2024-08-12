import React,{useContext, useState} from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Store } from './Global';
const PaymentMethods = () => {
  let{addcart,setaddcart}=useContext(Store); 
  let{Total}=useContext(Store);
  return (
    <div>
        <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">{addcart.length} items</h5>
          </div>
          <div className="card-body">
                          { addcart.map((props)=>(
                                  <div className="row">
                                  <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                    
                                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                      <img src={props.img}
                                        className="w-100" />
                                      <a href="">
                                        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                      </a>
                                    </div>
                                    
                                  </div>
                    
                                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                    
                                    <p><strong>{props.name}</strong></p>
                                     <p>{props.description}</p>
                                
                                  </div>
                    
                                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                    
                                    <div className="d-flex mb-4" style={{maxWidth:"300px"}}>
                                   </div>
                                    <p className="text-start text-md-center">
                                      <strong>{props.price}</strong>
                                    </p>
                                  </div>
                                  <hr className="my-4" />
                                </div>
                                
                          ))
                        }
                         
                          

           
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Bill</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Items-{addcart.length}
                
              </li>
             
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                </div>
                <span><strong>
                  </strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  </div>
      
 
    
    
  )
}

export default PaymentMethods