import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import RightBar from '../rightbar'

export default function MainLayout() {
    return (
        <div className="w-full flex">
            <Sidebar />
            <main className="flex-1 flex gap-[30px]">
                <main className="flex-1 border-x  w-[] border-[#2f3336]">
                    <Outlet />
                </main>
            </main>
            <RightBar />
        </div>
    )
}
