import Button from "./Button";
import { useThunk } from "../Hooks/useThunks";
import {deleteUser} from "../store"
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumsList";

const User = ({user}) => {
  const [doDeleteUser, isDeletingUser, deletingUserError] = useThunk(deleteUser);
  const HandleDelete = () => {
  doDeleteUser(user.id);
}
  const header = <><Button className="mr-3" loading={isDeletingUser} onClick={HandleDelete}><GoTrashcan/></Button>
  {deletingUserError && <div>Error deleting user.</div>}
  {user.name}</>

  return(
    <ExpandablePanel header={header}>
      <AlbumList user={user}/>
    </ExpandablePanel>
  )
}
export default User;