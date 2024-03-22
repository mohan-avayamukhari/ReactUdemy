import { useAddPhotosMutation, useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import Photo from "./Photo";

const PhotosList = ({album}) => {
  const {data, isFetching, error} = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotosMutation();


  const handleAddAlbum = () => {
    addPhoto(album);
  }

  let content;
  if(isFetching){
    content = <Skeleton className="h-8 w-8" times={3}/>
  }else if(error){
    content = <div>Error fetching photos...</div>
  }else{
    content = data.map(photo => <Photo className="w-40 h-40" key={photo.id} photo={photo}/>)
  }
  return(
    <div>
      <div className="m-2 flex flex-row items-start justify-between">
        <h3 className="text-lg font-bold">Album for {album.title}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>+ Add Photo</Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  )
}
export default PhotosList;