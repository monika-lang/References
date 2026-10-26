import { useEffect, useRef, useState } from "react";


const TimerPage = () => {
    const timerRef = useRef<number | null>(null);
    const [seconds, setSeconds] = useState(0);


    const StartTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
    }

    const StopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current!);
            timerRef.current = null;
        }
    }

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    }, [])

    return (
        <div className="flex gap-3">
            <h1>Seconds passed: {seconds}</h1>
            <button className="border rounded p-1 select-none" onClick={StartTimer}>Start</button>
            <button className="border rounded pt-1 pb-1 pr-2 pl-2 select-none" onClick={StopTimer}>Stop</button>
        </div>
    )
}

export default TimerPage