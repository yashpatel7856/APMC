import React from 'react'
import Bnavbar from '../componantes/Bnavbar'

function Bdprevbills() {
  return (
    <div>
      
        <Bnavbar/>
            
      <h2 className="container">Previous Bills Of Dealers: </h2>
                <div className="container">
                <table class="table table-striped">
            <caption>List of your Previous bills</caption>
            <thead className='thead-dark'>
                <tr>
                <th scope="col">Bill id</th>
                <th scope="col">Date</th>
                <th scope="col">farmer</th>
                <th scope="col">Veg name</th>
                <th scope="col">Veg weight(kg)</th>
                <th scope="col">Veg quote(/kg)</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th id="billid" scope="row">10</th>
                <td id="date">10/07/22</td>
                <td id="brokerid">F101</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="total">28500</td>
                <td id='status'>paid</td>
                </tr>
                <tr>
                <th id="billid" scope="row">15</th>
                <td id="date">10/07/22</td>
                <td id="brokerid">F101</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="total">28500</td>
                <td id='status'>paid</td>
                </tr><tr>
                <th id="billid" scope="row">40</th>
                <td id="date">10/07/22</td>
                <td id="brokerid">F101</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="total">28500</td>
                <td id='status'>paid</td>
                </tr><tr>
                <th id="billid" scope="row">50</th>
                <td id="date">10/07/22</td>
                <td id="brokerid">F101</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="total">28500</td>
                <td id='status'>paid</td>
                </tr>
                
            </tbody>
            </table>
            </div>
    </div>
  )
}

export default Bdprevbills
