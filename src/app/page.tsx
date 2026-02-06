import HomeClient from "@/components/HomeClient";
import { getSession } from "@/lib/getSession";

export default async function Home() {
 const session= await getSession();
 console.log(session?.user?.email)
  return (
    <>
    <HomeClient email={session?.user?.email}/>

    </>
  );
}
