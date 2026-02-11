import HomeClient from "@/components/HomeClient";
import { getSession } from "@/lib/getSession";
import { Toaster } from "sonner";


export default async function Home() {
 const session= await getSession();

  return (
    <>
    
<HomeClient email={session?.user?.email ?? ""} />
      <Toaster position="top-right" theme="dark" richColors />
    </>
  );
}
