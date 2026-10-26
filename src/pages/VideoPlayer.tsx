import { useRef } from "react"
import Gman from "./video/Gman.mp4";

const VideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="flex flex-col items-center justify-center">
            <video ref={videoRef} src={Gman}></video>

            <div className="flex flex-row items-center gap-2">
                <button onClick={():void => {
                    if (videoRef.current?.paused) {
                        videoRef.current.play();
                    }
                }} className="border p-2">Play</button>
                <button onClick={() => {
                    if (!videoRef.current?.paused) {
                        videoRef.current?.pause();
                    }
                }} className="border p-2">Pause</button>
            </div>
        </div>
    )
}

export default VideoPlayer;