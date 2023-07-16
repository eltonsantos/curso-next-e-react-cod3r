import useAppData from "@/data/hooks/useAppData";
import ButttonChangeTheme from "./ButtonChangeTheme";
import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {

  const { theme, changeTheme } = useAppData()

  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ButttonChangeTheme theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  )
}
