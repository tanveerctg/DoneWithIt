import {useEffect,useState} from 'react'

export default function useApi(asyncFunc) {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)

    const request=async (...args)=>{
        setLoading(true)
        const response=await asyncFunc(...args)

        setLoading(false)
        setError(!response.ok)
        setData(response.data)

        return response
    }
    return {data,loading,error,request};
}
