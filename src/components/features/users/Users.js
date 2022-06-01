import { useSelector } from "react-redux"
import { selectAllUsers } from "./usersSlice"

const Users = () => {
  console.log('selectAllUsers',selectAllUsers)
  return (
    <h1>Users</h1>
  )
}

export default Users
