import { useCallback, useEffect, useState } from "react";
import { countErrors, debug } from "../utils/helpers";
import useCountdown from "./useCountdown";
import useTypings from "./useTypings";
import useWords from "./useWords";


export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 25;
const COUNTDOWN_SECONDS = 30;

export default function useEngine() {
    const [state, setState]=useState<State>("start");
    const {timeLeft, startCountdown, resetCountdown} =useCountdown(COUNTDOWN_SECONDS);
    const {words, updateWords} = useWords(NUMBER_OF_WORDS);
    const {cursor,typed, clearTyped, totalTyped, resetTotalTyped} = useTypings( state!=="finish");
    const [errors, setErrors] = useState(0);
    const isStarting= state ==="start" && cursor > 0 ;
    const areWordsFinished = cursor === words.length;

    const restart = useCallback(() => {
        debug("restarting...");
        resetCountdown();
        resetTotalTyped();
        setState("start");
        setErrors(0);
        updateWords();
        clearTyped();
    },[clearTyped,updateWords,resetCountdown, resetTotalTyped]);

    const sumErrors  = useCallback(() => {
        debug(`cursor: ${cursor} - words.length: ${words.length}`);
        const wordsReached = words.substring(0, Math.min(cursor, words.length));
        setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
    },[typed, words, cursor]);

    useEffect(() => {
        if(isStarting){
            setState("start");
            startCountdown();
        }
    },[isStarting, startCountdown]);

    useEffect(() => {
        if(areWordsFinished){
            debug("words are finished");
            sumErrors();
            updateWords();
            clearTyped();
        }
    },[clearTyped, areWordsFinished, updateWords, sumErrors]);

    return {state, words, typed, errors, restart, timeLeft, totalTyped};
};

