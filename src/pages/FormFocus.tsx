import { useRef } from "react";

const FormFocusPage = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col gap-3">
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={inputRef} className="border pt-3 pb-3 pr-5 pl-5 " placeholder="Focusing field"/>

                <button className="p-2 rounded-2xl bg-blue-500 text-white" onClick={() => inputRef.current?.focus()}>Focus</button>
            </form>
        </div>
    )
}

export default FormFocusPage;