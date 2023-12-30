import { useEffect, useState } from "react";

const useDebounce = (value, delay=500)=>{
    const [debouncedValue, setDebouncedvalue] = useState();

    useEffect(()=>{
        const id = setTimeout(()=>{
            console.log("settimeout working")
            setDebouncedvalue(value)
        }, delay)
        return(()=>{
            clearTimeout(id)
            console.log("cleartimeout working")
        })
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;