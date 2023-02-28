import logo from './logo.svg';
import './App.css';

const App = () =>{
  const data = [
    {name : 'arpan1' , color : 'red' , study : { secondary : true , degree : true}},
    {name : 'arpan2' , color : 'white' , study : { secondary : true , degree : false}},
    {name : 'arpan3' , color : 'blue'},
    {name : 'arpan4' , color : 'pink' , study : { secondary : true , degree : false}},
    {name : 'arpan5' , color : 'yellow' , study : { secondary : false , degree : false}},
  ]

  return(
    <div className="content">
      <div className="App">
        <table>
          <thead>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>color</th>
            <th>secondary</th>
            <th>degree</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((i,index) =>{
                return(
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i.name}</td>
                    <td>{i.color}</td>
                    <td>{i?.study?.secondary === true ? "yes" : "no"}</td>
                    <td>{i?.study?.degree === true ? "yes" : "no"}</td>
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
