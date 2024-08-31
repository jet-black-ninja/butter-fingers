import cn from "classnames"
import Caret from "./Caret"
import React from 'react';
interface typingProps{
    userInput:string,
    words: string,
    className?:string
}
function UserTypings({
    userInput,
    words,
    className="",
}:typingProps) {
    const typedCharacter = userInput.split("");
    return(
        <div className={className}>
            {typedCharacter.map((char:string, index: number) => (
                <Character 
                key={`${char}_${index}`}
                actual={char}
                expected={words[index]}
                />
            ))}
            <Caret />
        </div>

    );
};
interface CharacterProps{
    actual:string,
    expected:string
}
function Character({actual, expected}:CharacterProps){
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";

    return(
        <span
        className={cn({
            "text-red-500":!isCorrect && !isWhiteSpace,
            "text-green-500": isCorrect && !isWhiteSpace,
            "bg-red-500/50": !isCorrect && isWhiteSpace,
        })}
        >
            {expected}
        </span>
    );
};
export default UserTypings;