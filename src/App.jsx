
const title = 'Bonjour les gens, ici zoddy!'
const style = {color: 'red', }
const showTitle = true
const todos = [ 
  "premier élément",
  "second élément",
  "dernier élément",
]

function App() {

  const handleClick = () => {
    alert("j'ai cliqué sur le titre! ✅")
  }

  return <>
  
    {/* {
      showTitle ? <h1 onClick={handleClick} style={style}>{title}</h1> :
                  <p>False</p> 
    } */}

    <TitleFunc color="green"> Rebonjour , ici zodyy</TitleFunc>
    <p className="ThirstP">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Consectetur, soluta?</p> 
  
    <ul>
      {
        todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))
      }
    </ul>
  </>
   
}

function TitleFunc({color, children}) {
    return <h1 style={{color : color}}> {children} </h1>
}

export default App
