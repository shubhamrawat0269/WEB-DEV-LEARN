import { CiLight, CiDark } from "react-icons/ci";

export default function Header({ theme }) {
  const [isDark, setIsDark] = theme

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">Where in the world?</h2>
        <div className="theme-changer" onClick={() => {
          setIsDark(!isDark)
        }}>
          {
            isDark ? (
              <>
                <CiLight />
                &nbsp;&nbsp;Light Mode
              </>
            ) : (
              <>
                <CiDark />
                &nbsp;&nbsp;Dark Mode
              </>
            )
          }

        </div>
      </div>
    </header>
  )
}