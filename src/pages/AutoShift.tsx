import { useRef } from "react"

const AutoShiftPage =() => {
    const secondInput = useRef<HTMLInputElement>(null);
    const thirdInput = useRef<HTMLInputElement>(null);
    const submit = useRef<HTMLInputElement>(null);

    return (
        <form action="post" onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center justify-center gap-2">
            <input type="number" onInput={() => secondInput.current?.focus()} className="border-2 p-2"/>
            <input type="number" ref={secondInput} onInput={() => thirdInput.current?.focus()} className="border-2 p-2"/>
            <input type="number" ref={thirdInput} onInput={() => submit.current?.focus()} className="border-2 p-2"/>
            <input type="submit" ref={submit} value="Submit" className="border-2 p-2"/>
        </form>
    )
}

export default AutoShiftPage;