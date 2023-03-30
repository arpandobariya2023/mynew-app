import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Counter from './Counter';


const App = () =>{
//   const newdata = [
//     {name :'p1', price : 10, qty : 2 },
//     {name :'p2', price : 30, qty : 3 },
//     {name :'p3', price : 40, qty : 5 },
//     {name :'p4', price : 220, qty : 1 },
//     {name :'p5', price : 340, qty : 2 },
//     {name :'p6', price : 150, qty : 7 },
//     {name :'p7', price : 120, qty : 8 }
//   ]
//   const totlqty = newdata.reduce((acc,curr)=>{
//     return acc + curr.qty
//   },0);
//   const totlpric = newdata.reduce((acc,curr)=>{
//     return acc + (curr.qty * curr.price)
//   },0);

//   const username = 'Logo';
//   const navi = ['home', 'blog','pages','about','contect']
  return(
    <div>
      <Counter />
      
      {/* <Header name={username} navi={navi}/> */}
      {/* <Routes>
        <Route path='/home' element={<Footer/>}>

        </Route>
      </Routes> */}
      {/* <div className="content">
        <table border={1}>
          <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quntity</th>
            <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              newdata.map((i,index) =>{
                return(
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i?.name}</td>
                    <td>{i?.price}</td>
                    <td>{i?.qty}</td>
                    <td>{i?.qty * i?.price}</td>
                  </tr>
                )
              })
            }
            <tr>
              <td>Total Quntity</td>
              <td colSpan={4}>{totlqty}</td>
            </tr>
            <tr>
              <td>Total Price</td>
              <td colSpan={4}>{totlpric}</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      {/* <Footer /> */}
    </div>
  )

}
  
export default App;
