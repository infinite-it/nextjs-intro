import NavBar from "./NavBar";
import Seo from "./Seo";

export default function Layout({children}) {
    return (
        <>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}
