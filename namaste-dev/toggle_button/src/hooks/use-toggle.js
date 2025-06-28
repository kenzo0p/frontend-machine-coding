import { useState } from "react"

export const useToggle = (inititalValue = false)  => {
    const [isOn , setIsOn] =useState(inititalValue);

    const toggle = () => {
        setIsOn((prev) => !prev);
    }

    return {toggle , isOn};
}