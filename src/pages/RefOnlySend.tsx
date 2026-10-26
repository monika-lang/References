import {useRef} from "react";

const RefOnlySendPage = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const textSubmitAndChange = (e:any) => {
        e.preventDefault();
        const h1 = document.getElementById("text");
        h1!.textContent = inputRef.current!.value;
    }

    return (
        <div className="flex flex-col">
            <h1 id="text"></h1>
            <form action="post" className="flex flex-col justify-center gap-4" onSubmit={textSubmitAndChange}>
                <input type="text" className="border-2 p-3" ref={inputRef}/>
                <input type="submit" value="Submit" className="border-2 p-3"/>
            </form>
        </div>
    )
}

export default RefOnlySendPage;