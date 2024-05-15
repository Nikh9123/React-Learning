import { Outlet } from "react-router-dom"
import AppFooter from "./AppFooter"
import AppNav from "./AppNav"
import Logo from "./Logo"
import styles from "./Sidebar.module.css"

function SideBar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />

            <AppFooter footerStyle={styles.footer} copyrightStyle={styles.copyright}/>
        </div>
    )
}

export default SideBar
