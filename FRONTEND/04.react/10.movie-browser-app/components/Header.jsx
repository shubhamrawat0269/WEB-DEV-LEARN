import { CiLight, CiDark } from "react-icons/ci";

export default function Header() {
  return (
    <header className={`header-container`}>
      <div className="header-content">
        <h2 className="title">Movie zone</h2>
        <div className="theme-changer">
            Light Mode
        </div>
      </div>
    </header>
  )
}