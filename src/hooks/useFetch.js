import axios from "axios";
import { useState } from "react";

const useFetch = url => {

    const [apiInfo, setApiInfo] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    //GET 

    const getProductById = () => {

        setIsLoading(true)

        axios.get(url)
            .then(res => {
                setApiInfo(res.data)
                setHasError(false)
            }
            )
            .catch(err => {
                console.log(err)
                setHasError(true)
            }
            )
            .finally(() => {
                setIsLoading(false)
            })
    }


    return [apiInfo, getProductById]
}

export default useFetch;

