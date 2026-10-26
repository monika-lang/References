import { useEffect, useRef } from "react"

const RenderCounterPage = () => {
    const renderCount = useRef(
        Number(localStorage.getItem("renderCount") || 0)
    );

    useEffect(() => {
        renderCount.current++;
        localStorage.setItem("renderCount", `${renderCount.current}`);
    }, []);

    return (
        <div><h1>Renders: {renderCount.current}</h1></div>
    )
}

export default RenderCounterPage;