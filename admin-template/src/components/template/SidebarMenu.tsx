import useAuth from "../../data/hooks/useAuth";
import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SidebarMenu() {

  const { logout } = useAuth()
  
  return (
    <aside className="flex flex-col dark:bg-gray-900 bg-gray-200 text-gray-700">
      <div className="flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Início" icon={HomeIcon} />
        <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
      <ul className="">
        <MenuItem onClick={logout} text="Sair" icon={LogoutIcon} className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white" />
      </ul>
    </aside>
  )
}
