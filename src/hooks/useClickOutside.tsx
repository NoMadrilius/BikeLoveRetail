import {useEffect} from "react";

export const useClickOutside = (ref: any, onClickOutside: ()=>void) => {
    function handleClickOutside(event:any) {
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