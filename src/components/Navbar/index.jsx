import { useContext } from "react";
import { Select } from "../index";
import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { ModeContext } from "../../context/Mode";

const index = () => {
  const { mode, setMode } = useContext(ModeContext);
  console.log(mode);
  return (
    <>
      <div className="nav-wrapper shadow dark">
        <section className="container">
          <div className="nav flex">
            <div className="nav__logo">
              <h1 className={`${mode ? "text-white" : "text-black"}`}>
                Where is the world !
              </h1>
            </div>
            <div className="nav__bar">
              <ul className="nav-list">
                <li className="nav-item">
                  <Select />
                </li>
                <li
                  onClick={() => {
                    setMode(!mode);
                    localStorage.setItem("mode", mode);
                  }}
                  className="nav-item"
                >
                  <span className="icon-mode">
                    {mode ? (
                      <BsSun className="text-white" />
                    ) : (
                      <BsFillMoonFill />
                    )}
                  </span>
                  <p
                    className={`fs-5 mode-title ${
                      mode ? "text-white" : "text-black"
                    }`}
                  >
                    {" "}
                    {mode ? "Light mode" : "Dark mode"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
