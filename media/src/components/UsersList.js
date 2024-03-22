import { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import {addUser} from "../store";
import {useThunk} from "../Hooks/useThunks";
import User from "./User";

const UsersList = () => {
  const [doFetchUsers, isLoading, error] = useThunk(fetchUsers)
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const {data} = useSelector(state => {
    return state.users
  })

  useEffect(() => {
    doFetchUsers()
  },[])

  const HandleAddUser = () => {
    doAddUser()
  }

  let content;

  if(isLoading){
    content = <Skeleton times={6} className="h-10 w-full"/>
  }else if(error){
    content = <div>Error fetching data....</div>
  }else{
    content = data.map(user => {
      return(
        <User key={user.id} user={user}/>
      )
    })
  }

  return(
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading = {isCreatingUser} onClick={HandleAddUser}>+ Add User</Button>
      </div>
      {content}
    </div>
  )
}
export default UsersList;