import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

const Album = ({album}) => {
  const [deleteAlbum, result] = useDeleteAlbumMutation();
  const HandleDelete = () => {
    deleteAlbum(album);
  }

  const header = <>
  <Button className="mr-2" loading={result.isLoading} onClick={HandleDelete}><GoTrashcan/></Button>
  {result.error && <div>Error deleting user.</div>}
  {album.title}
  </>
  return(
       <ExpandablePanel header={header}><PhotosList album={album}/></ExpandablePanel>
  )
}
export default Album;