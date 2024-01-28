import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loader/Loading";

function ViewGallery(){

    const {id} = useParams()
    const [imageDetails, setImgaeDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    async function fetchImgDetails(){
        const data = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        setImgaeDetails({
            name:  data.data.photo.title,
            desc: data.data.photo.description,
            url: data.data.photo.url,
          })

          setIsLoading(false)
    }

    useEffect( 
        () =>{
            fetchImgDetails()
        },[])

    return (
        <>
        <div>
            {
                (isLoading) ? <Loading /> :
                (
                <div className="bg-blue-700 w-full min-h-[100vh] flex justify-around flex-wrap items-center p-3">
                        <img className="w-[500px] shadow-lg shadow-white" src={imageDetails.url}/>
                    <div className="w-[50%]">
                        <h1 className="text-4xl text-white font-bold mb-5">{imageDetails.name}</h1>
                        <p className="text-2xl text-white">{imageDetails.desc}</p>
                    </div>

                </div>
                )
            }
        
        </div>
        </>
    )
}

export default ViewGallery;