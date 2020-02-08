import {useState} from "react";

export function useGetPermission(){

    const [permission, setPermission] = useState(null);
    const handler = (params) => {
        console.log("Fetching data");
        setTimeout(()=>{
            setPermission((params.page %2 ===0));
        },3000)
    }
    return [permission, handler];
}
