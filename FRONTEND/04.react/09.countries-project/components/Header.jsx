import { CiLight } from "react-icons/ci";

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">
                <h2 className="title">Where in the world?</h2>
                <div className="theme-changer">
                    <CiLight />
                    Light Mode
                </div>
            </div>
        </header>
    )
}