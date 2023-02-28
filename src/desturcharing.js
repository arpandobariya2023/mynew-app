import logo from './logo.svg';
import './App.css';

const App = () =>{
  const newdata = [
    {name :'p1', price : 10, qty : 2 },
    {name :'p2', price : 30, qty : 3 },
    {name :'p3', price : 40, qty : 5 },
    
  ]
  const newdata1 = [
    {name :'p1', price : 10, qty : 2 },
    {name :'p2', price : 30, qty : 3 },
    {name :'p3', price : 40, qty : 5 },
    {name :'p4', price : 220, qty : 1 },
    
  ]

  // concat-method:------
  // const newdata2 = newdata.concat(newdata1); 
  
  // spread-operator-method:---------------
  const newdata2 = [...newdata , ...newdata1];    
  
  // desturcharing of arry:-----------------
  // const [fruit , fruit1, fruit2] = ['f1', 'f2', 'f3'];
  // console.info("fruit++",fruit1,fruit);

  // desturcharing of object:--------------
  const {name,age} = {
    name : 'arpan',
    age : 20
  }
  console.info("info1++",name,age);

  
  return(
    <div className="content">
      <div className="App">
        <table border={1}>
          <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quntity</th>
            </tr>
          </thead>
          <tbody>
            {
              newdata2.map(({name , price, qty},index) =>{
                return(
                  <tr>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{qty}</td>
                   
                  </tr>
                )
              })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )

}
  
export default App;
