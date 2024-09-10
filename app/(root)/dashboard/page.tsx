import { UserButton } from '@clerk/nextjs'

const DashboardPage = () => {
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center text-center'>
            <p>This is a protected route</p>
            <UserButton />
        </div>
    )
}

export default DashboardPage