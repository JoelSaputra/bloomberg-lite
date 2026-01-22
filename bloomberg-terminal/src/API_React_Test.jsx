import {useEffect, useState} from 'react';

export default function API_React_Test() {
    const [profile, setProfile] = useState(null);

    useEffect(()=>{
        async function fetchProfile(){

            try{
                const apiKey = import.meta.env.VITE_FISCAL_API_KEY;
                const baseUrl = import.meta.env.VITE_FISCAL_BASE_URL;
                const companyKey = "NASDAQ_MSFT";
                
                
            


            }

            catch{

            }
        }

    }, []);

    }