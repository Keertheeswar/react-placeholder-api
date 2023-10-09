import { useContext, useState } from "react"
import { ColorContext } from "../Providers/ColorProvider"
const ColorChooser = () => {
    const {setColor}=useContext(ColorContext)
    // const[color,setColor]=useState("")
    const handlecolorChange=(e)=>{
        setColor(e.target.value)
    }
    return <>
        <input type="text" onChange={handlecolorChange} />
    </>
}

export default ColorChooser