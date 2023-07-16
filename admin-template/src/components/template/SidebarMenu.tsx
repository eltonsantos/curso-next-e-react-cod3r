import { BellIcon, HomeIcon, SettingsIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function SidebarMenu() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Início" icon={HomeIcon} />
        <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
    </aside>
  )
}
