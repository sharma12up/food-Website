import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
const PaymentMethods = () => {
    const{cart}=useSelector((state)=>state.cart);
  return (
    <div>
        <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - 2 items</h5>
          </div>
          <div className="card-body">
            {
              cart.length>0 ?(
            cart.map((item)=>(
                             <div className="row">
                             <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                               
                               <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light" key={item.id}>
                                 <img src={item.img}
                                   className="w-100" alt={item.name}/>
                                 <a href="">
                                   <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                 </a>
                               </div>
                               
                             </div>
               
                             <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                               
                               <p><strong>{item.name}</strong></p>
                            
                               <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                                 title="Remove item">
                                 <i className="fas fa-trash"></i>
                               </button>
                               <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                                 title="Move to the wish list">
                                 <i className="fas fa-heart"></i>
                               </button>
                           
                             </div>
               
                             <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                               
                               <div className="d-flex mb-4" style={{maxWidth:"300px"}}>
                                 <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2">
                                   <i className="fas fa-minus"></i>
                                 </button>
               
                                 <div data-mdb-input-init className="form-outline">
                                   <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" />
                                   <label className="form-label" >Quantity</label>
                                 </div>
               
                                 <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2"
                                 >
                                   <i className="fas fa-plus"></i>
                                 </button>
                               </div>
                               <p className="text-start text-md-center">
                                 <strong>{item.price}</strong>
                               </p>
                              
                             </div>
                           </div>
            ))
            ):(<p>no having any cart</p>)
            }

            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
             
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
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