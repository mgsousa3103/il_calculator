import { currentUser } from "@clerk/nextjs/server"

const DashboardPage = async () => {
    const user = await currentUser()

    return (
        <div className='max-w-wrapper'>
            <section className="w-full h-screen py-24">
                <h1 className="text-4xl leading-9 font-bold text-violet-600">Welcome, {user?.firstName}</h1>
                <p className="text-dark-700">Start the day with managing your pools.</p>
            </section>
        </div>
    )
}

export default DashboardPage