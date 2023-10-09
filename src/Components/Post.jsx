import { useContext } from "react"
import { ColorContext, ColorProvider } from "../Providers/ColorProvider"

const Post = ({ title, body }) => {
    const { color } = useContext(ColorContext)
    return <div style={{
        backgroundColor: `${color}`
    }}>
        <h1>
            {title}
        </h1>
        <p>
            {body}
        </p>
    </div>

}

export default Post