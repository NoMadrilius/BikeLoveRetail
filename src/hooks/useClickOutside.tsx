import {useEffect} from "react";

export const useClickOutside = (ref, onClickOutside) => {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}