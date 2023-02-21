import axios from "axios"
import { useEffect, useState } from "react"


const useDataget = (apiUrl = null) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        if(apiUrl){
            axios.get(apiUrl).then(res => {
                setData(res.data)
            }).catch(err => {
                console.log(err);
                setData(err.response)
            })
        }

    },[apiUrl])
    return [data]

}
export default useDataget;