import Dropzone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs/server";


function Dashboard() {
  const {userId} = auth()
  return (
    <Dropzone />    
  )
}

export default Dashboard