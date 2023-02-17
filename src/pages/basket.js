import React from 'react'
import mango from '../img/mango.jfif'
import organic from '../img/watermelon.jfif'
import '../CSS/basket.css'
const basket = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbar-brand" href="/"> Dashboard</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="basket">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="billing">Billing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login">
              login/signup
            </a>
          </li>
        </ul>
      </div>
    </nav>


      <div className="container">
            <div className="intro text-align-center m-5 p-3">
                <h1>Welcome to Product page ...  </h1>
            </div>
            <h3 className='m-2 p-4'>Here are some Available products</h3>
            <div className="row mx-2 p-3">
                <div className="col-4 list">
                    <img src={mango} alt="" />
                </div>
                <div className="col-lg-8 list-2">
                    <ul>
                    <li>price : 150 rs</li>
                    <li>quantity : 10 kg</li>
                    <li>Delivery : 5 day max</li>
                    </ul>
                </div>
                
            </div>
            
        </div> 
    </>
  )
}

export default basket
