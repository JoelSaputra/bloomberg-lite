import React from 'react'
import { useEffect, useState } from 'react'

const news = () => {
    const [newsData, setNewsData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try{
                setLoading(true)
                const response = await fetch('http://localhost:8000/news')
                const data = await response.json()

                setNewsData(data)
                console.log(data)

            }

            catch(e){
                alert("Error fetching data:", e)
            }

            finally{
                setLoading(false)
            }
        }

        fetchNews()

    }, [])


    if (loading) return <div>loading...</div>

  return (
    <div className="px-4 overflow-auto grid grid-cols-2 gap-x-8 gap-y-8">

        {newsData.map((news) => 
            <div key={news.headline} className='w-[100%] h-85 matte-metal-card border border-grey rounded-2xl pt-4 hover:border-indigo-300 pb-10'>
            <div className="flex justify-center px-16 mb-8">
                <h1 className="text-[19px] font-extrabold font-['Times_New_Roman'] text-center">
                    {news.headline}
                </h1>

            </div>

            <div className=" px-8">

                <ul className="list-disc space-y-4 text-justify">
                {news.bullets.map( (point) => 

                <li className="text-[13px] text-gray-300 font-bold font-data text-justify">{point}</li>
                )}

                </ul>
                
            </div>

            <div className="mt-6 flex justify-center mb-5">
            <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-bold font-data italic text-blue-400 hover:underline"
                >
                Read more
            </a>
            </div>


        </div>
        
        
        )}

        

    </div>
  )
}

export default news