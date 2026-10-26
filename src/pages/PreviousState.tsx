import { useEffect, useRef, useState } from "react"

const PreviousStatePage = () => {
    const prevStateRef = useRef<number>(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        prevStateRef.current = count;
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Previous Count: {prevStateRef.current ? prevStateRef.current : "None"}</h1>
            <button className="p-2 rounded-2xl bg-blue-500 text-white" onClick={() => setCount(count+1)}>Add 1</button>
        </div>
    )

}

export default PreviousStatePage;