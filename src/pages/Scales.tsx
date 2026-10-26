import { useRef, useState, useEffect } from "react";


const ScalesPage = () => {
    const divElement = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(divElement.current!.offsetWidth);
        setHeight(divElement.current!.offsetHeight);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-4 h-50 w-48 border-2" ref={divElement}>
            <h1>Width: {width}px</h1>
            <h1>Height: {height}px</h1>
        </div>
    )
}

export default ScalesPage;