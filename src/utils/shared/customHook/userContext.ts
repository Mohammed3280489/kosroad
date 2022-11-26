import { useContext } from "react"
import { userContext } from "../../../components/general/contextProvider";

export const UserContext = ()=> {
     return useContext(userContext);
}