import {useRef} from "react";
import {MdRefresh} from "react-icons/md";
import React from 'react';
interface RestartProps{
    onRestart: () => void;
    className?: string;
}
function RestartButton ({
    onRestart: handleRestart,
    className = "",
}: RestartProps
) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleClick  = () => {
        buttonRef.current?.blur();
        handleRestart();
    }

    return (
        <button
        tabIndex={-1}
        ref={buttonRef}
        className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
        onClick={handleClick}
        >
            <MdRefresh className="w-6 h-6"/>
        </button>
    )
}

export default RestartButton;