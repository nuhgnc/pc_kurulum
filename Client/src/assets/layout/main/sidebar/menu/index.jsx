import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { MainMenu } from '~/utils/consts'

export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            {MainMenu.map((menu, item) => (
                <NavLink
                    to={menu.path}
                    key={Math.random()}
                    className="py-1 block group"
                >
                    {({ isActive }) => (
                        <div
                            className={classNames(
                                'inline-flex  p-3 rounded-full gap-5 items-center transition-colors group-hover:bg-[#eff3f41a]',
                                { 'font-bold': isActive }
                            )}
                        >
                            <div className="w-[26.25] h-[26.25] relative ">
                                {menu?.notification && (
                                    <span className=" w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] flex items-center justify-center ">
                                        {menu?.notification}
                                    </span>
                                )}
                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            <div className="pr-4 text-xl">{menu.title}</div>
                        </div>
                    )}
                </NavLink>
            ))}
        </nav>
    )
}
