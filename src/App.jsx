import React from "react";


const showEvent = (e) =>{
    console.log('evento clicando')
    console.log(e)
}


    const App =() => {

        const name ='digital innovation one'

        const handleChange = (e) =>{
            const {value} = e.target
            console.log(value)
        }
        const showEvent = (e) =>{
            console.log('evento clicando')
            console.log(e)
            alert(name)
        }
        const Button = <button onClick={showEvent}>Mostrar evento</button>

             return (
              <div>
                  <p>Digital Innovation one</p> 
                  <input onChange={handleChange}/>
                  {deleteButton}
                  {Button}             
               </div>
    );
};
export default App;