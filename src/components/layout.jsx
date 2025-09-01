// Reusable layout that defines the two main divs: sidebar + content/outlet
import React from "react"
import { Outlet } from "react-router-dom" // placeholder where child pages will be rendered
import Sidebar from './sidebar'
import Content from './content'

function Layout() {
    return (
        <div className="app-container">
            <Sidebar />
            <Content>
                <Outlet />
            </Content>
        </div>
    );

}

export default Layout
