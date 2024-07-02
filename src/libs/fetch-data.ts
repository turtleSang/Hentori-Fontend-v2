import axios from "axios"
import { useEffect, useState } from "react";

enum typeMethod {
    GET, POST, PUT, DELETE
}

let rootUrl: string = "http://localhost:8080/api/";

// Admin url
let adminUrl: string = `${rootUrl}/admin`;

export let urlLogin: string = `${adminUrl}/login`;


export async function useFetch(url: string, method: string, params?: {}, body?: {}) {
    let [data, setData] = useState(null);
    let [loadding, setLoading] = useState(false);
    useEffect(() => {
        async function fetch() {
            setLoading(true)
            try {
                let res = await axios({ method, url, params, data: body });
                setData(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }

        }
    }, [url])
    return { data, loadding };
}