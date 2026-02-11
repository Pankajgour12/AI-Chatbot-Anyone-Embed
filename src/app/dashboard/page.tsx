import DashboardClient from '@/components/DashboardClient'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'

async function Page() {
  const session = await getSession()

  if (!session?.user?.id) {
    redirect("/")   
  }

  return (
    <DashboardClient ownerId={session.user.id} />
  )
}

export default Page
