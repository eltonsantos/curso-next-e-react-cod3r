import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SidebarMenu() {
  return (
    <aside className="flex flex-col">
      <div className="flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Início" icon={HomeIcon} />
        <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
      <ul className="">
        <MenuItem onClick={() => console.log("Logout")} text="Sair" icon={LogoutIcon} className="text-red-600 hover:bg-red-400 hover:text-white" />
      </ul>
    </aside>
  )
}
