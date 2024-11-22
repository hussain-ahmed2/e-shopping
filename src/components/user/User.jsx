import { useContext } from "react"
import Signup from "./signup/Signup"
import Login from './login/Login'
import UserContext from "./UserConext"

function User() {
  const {account, user} = useContext(UserContext);
  return (
    <div className="z-50">
        {
          user.email ? null : account ? <Login /> : <Signup />
        }
    </div>
  )
}
export default User