import { useRef } from "react"


const SmoothScroll = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const smoothScroll = () => {
        divRef.current?.scrollIntoView({
            behavior:"smooth",
            block: "center"
        })
    }

    return (
        <div className="h-400 flex flex-col items-center justify-between">
            <button className="border-2 p-2" onClick={smoothScroll}>Jump Down</button>

            <div ref={divRef}>Hello</div>
        </div>
    )
}

export default SmoothScroll;