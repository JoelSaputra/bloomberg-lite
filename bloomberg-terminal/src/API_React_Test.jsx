import {useEffect, useState} from 'react';

export default function API_React_Test() {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchProfile(){

            try{
                
                const api_key = import.meta.env.VITE_FISCAL_API_KEY; // Ensure your API key is stored in environment variables
                console.log(import.meta.env.VITE_FISCAL_API_KEY);

                const url = `https://api.fiscal.ai/v1/company/profile?companyKey=NASDAQ_MSFT&apiKey=${api_key}`; //example for using URL template literals

                const response = await fetch(url); //fetch data from the API 
                const data = await response.json(); //make it into json object



                setProfile(data); //set the profile state with fetched data

            

            }

            catch(e){
                console.log("Error fetching profile:", e);
                setError(e.message);


            }
        }
        fetchProfile();

    }, []);


    if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{profile.name}</h1>
      <p>Sector: {profile.sector}</p>
      <p>Industry: {profile.industry}</p>
    </div>
  );
}