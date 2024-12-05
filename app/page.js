import Image from "next/image";
import Header from "./component/Header";
import Sidbar from "./component/Sidbar";
import Feed from "./component/Feed";
import Widgets from "./component/Widgets";
// import { getServerSideProps } from "next/dist/build/templates/pages";

export default function Home() {
  // if (!session) return <Login/>
  return (
    
    <div className=" h-screen bg-gray-100 overflow-hidden">
     
      
        <title>FaceBook</title>
        <Header/>
        <main className="flex">
        <Sidbar/>
        <Feed/>
        <Widgets/>
        </main>
       
    
      

    </div>
  );
// }export async function getServerSideProps(context){
//     const session = await getSession(context)
//     return{
//       props:{
//         session
//       }
//     }
// 
}