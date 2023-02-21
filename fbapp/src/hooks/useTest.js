import { useEffect, useState } from "react";


const useAgeCal = (year=0 ) => {
    const [age, setAge] = useState();
    useEffect(() => {
        const userAge = new Date().getFullYear() - year
        setAge(userAge)
    },[year])
    return [age, setAge]
}

export default useAgeCal;