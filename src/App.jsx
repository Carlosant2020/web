import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Carlos Antonio',
        skills:['React','Node','css','Webpack']
    },
    {
        id: 2,
        name: 'Aline',
        skills:['HTML','REACT','css']
    },
    {    
        id: 3,
        name: 'Jessica',
        skills:['NODE','MONGO','SQL','JAVA']
    }

]


    const App =() => {

            const handleClick = (e) =>{
              console.log('deletar cliente')
              alert('id do cliente')
        }
        const renderCustomers = (customer,index) =>{
            return(
            <div key={'customer-${customer.id}'}>
                <li>{customer.name} <button onClick= {(e) => handleClick(e,customer.id)}>deletar cliente</button></li>
            {customer.skills.map(renderSkills)}
            </div>
            
            )
        }
        const renderSkills = (skills,index) => {
                    return (
              <div style={{ paddingLeft:'30px'}} key= {'skill-${index}'}>
                  <li>{skill}</li>                              
               </div>

            )
        }

return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
    );
};
export default App;