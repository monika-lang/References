import { useState, useEffect, useRef } from "react";

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event:MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="border-2 p-2">
            <button onClick={() => setIsOpen(!isOpen)}>
                Toggle menu
            </button>

            {isOpen && (
                <ul>
                    <li className="border p-1 m-1">Option 1</li>
                    <li className="border p-1 m-1">Option 2</li>
                    <li className="border p-1 m-1">Option 3</li>
                </ul>
            )}
        </div>
    );
}

export default DropDown;