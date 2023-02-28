

const Header = (props) => {
  return (
    <div className="header-1">
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
        <ul>
            {
              props.navi.map((i)=>{
                return<li>{i}</li>
              })
            }
        </ul>
      </div>
    </div>
  )
}

export default Header
