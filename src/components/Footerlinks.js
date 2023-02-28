
// this is using function base component//////-------------------------------
const Footerlinks = (props) => {
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
    </div>
  )
}

export default Footerlinks


// this is using class base component//////-------------------------------
// import React, { Component } from 'react'

// export default class Footerlinks extends Component {

//   render() {
//     return (
//       <div className="footer-1 ">
//       <ul>
//              <li>Instragram</li>
//              <li>Facebook</li>
//              <li>Twitter</li>
//          </ul>
//      </div>
//     )
//   }
// }

