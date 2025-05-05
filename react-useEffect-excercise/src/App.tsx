import { useEffect, useState } from "react"
import "./App.css"

const App = () => {
  // state
  const [mesage, setMessage] = useState<string>("")
  const [likes, setLikes] =  useState<number>(0)
  const [color, setColor] = useState<string>("Red")

  // use Effect
  useEffect(()=>{
    console.log(`Message changued to ${mesage}`)
  },[mesage])

  useEffect(()=>{
    alert(`Likes updated to ${likes} !!`)
  },[likes])

  useEffect(()=>{
    console.log(`Color changued to ${color}`)
  })

  return (
    <div>
      <h2>Message Logger</h2>
      <button type="button" onClick={()=>setMessage("Hello from react")}>Send Message</button>
      <h2>Like Counter</h2>
      <button type="button" onClick={()=>setLikes(likes + 1)}>Like</button>
      <h2>Color Box</h2>
      <button type="button" onClick={()=>setColor( color === "Red" ? "Blue" : "Red" )}>Changue color</button>
      <div style={{
        width: "100px",
        height: "100px",
        backgroundColor: `${color}`
      }}>Color Box</div>
    </div>
  )
}

export default App