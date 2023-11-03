import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import RightBar from '../rightbar'

export default function MainLayout() {
    return (
        <div className="w-[1265px] mx-auto flex">
            <Sidebar />
            <main className="flex-1 flex gap-[30px]">
                <main className="flex-1 border-x max-w-[600px] border-[#2f3336]">
                    <Outlet />
                </main>
            </main>
            <RightBar />
        </div>
    )
}
