import { useRef } from "react"

const VideoPlayer = () => {
    const ref = useRef()

    const handlePlay = () => {
        ref.current.play()
    }

    const handlePause = () =>{
        ref.current.pause()
    }

    return (
        <div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <video src='https://vk.com/video?z=video-140691640_456249043%2Fpl_cat_trends' 
            ref={ref} 
            width='300'/>
        </div>
    )
}

export default VideoPlayer