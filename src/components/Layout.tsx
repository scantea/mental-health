import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

function Layout():JSX.Element {
    return (
        <div className="App">
            <Navigation />
            <div className="page">
                <span className="tags top-tags"></span>
                <Outlet />
                <span className="tags bottom-tags">
                    <br />
                    <span className="bottom-tag-html"></span>
                </span>
            </div>
        </div>
    )
}

export default Layout;