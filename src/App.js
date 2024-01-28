import Photo from "./components/Photo";
import Loading from "./components/Loader/Loading";
import useImage from "./components/useImage";


function App() {

  const {isLoading, apiData} = useImage()

  return (
   <div className="w-full p-2 flex justify-center flex-wrap gap-3">
      {
        (isLoading) ? <Loading /> : apiData.map((v) => {
          return <Photo key={v.id} url={v.url} title={v.name} id={v.id}/>
        })
      
      }
   </div>
  )

}

export default App;
