import React from "react";

const customer = [
    {
    id: 1,
    nome:'carlos'
    },
    {
        id:2,
        name:'carlo'
    },
    {
        id: 3,
        name: 'aline'
    }
]

    const App =() => {

        const renderCustomer =() => {
            return(
                <li>{customer.name}</li>
            )
        }

     return(
              <div>
                  <p>Digital Innovation one</p>                 
              <div>
                  <ul>
                  {listCustomer.map(renderCustomers)}
                  </ul>
               </div>
               </div>
    );
};
export default App;