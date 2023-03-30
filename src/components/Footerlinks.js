
// // this is using function base component//////-------------------------------
const Footerlinks = (props) => {
  
  
  const Text =()=>{
    return(
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
  const HOC = (Wrapper , color) =>{
      return(props)=>(
        <div style={{color : color}}>
          <Wrapper {...props}/>
        </div>
      )
  }
  const Comp = HOC(Text,'red')

  return (
    <div className="footer-1 ">
      <ul>
            {
              props.footernavi.map((i)=>{
                return(
                  <li>{i}</li>
                )
              })
            }
        </ul>
        <Comp />
    </div>
  )
}

export default Footerlinks


// // this is using class base component//////-------------------------------
// import React, { Component } from 'react'

// export default class Footerlinks extends Component {
// Text = () => {
//   return
//     <div>
//       <h1>hello world</h1>
//     </div>
// }
// HOC = (Wrapper , color) =>{
//   return(this.props)(
//     <div style={{color : color}}>
//       <Wrapper {...this.props}/>
//     </div>
//   )
// }
// Comp = HOC(this.Text,'red')


//   render() {
//     return (
//       <div className="footer-1 ">
//         <ul>
//              <li>Instragram</li>
//              <li>Facebook</li>
//              <li>Twitter</li>
//          </ul>
//          <Comp />
//      </div>
//     )
//   }
// }

