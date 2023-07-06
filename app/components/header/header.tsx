import React from "react";
import Logo from "../logo";
import pages from "@/app/pages";

import DropDownMenu from "./dropdownMenu";

const Header = () => {
    return (
        <div className="navbar bg-gradient-to-r from-primary via-indigo-900  to-secondary">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a className="cursor-pointer" href="/">
                        {/* //this should change to black when dark mode is enabled */}
                        <Logo mode="white" />
                    </a>
                </div>
                <div className="flex-none sm:block hidden">
                    <ul className="menu menu-horizontal px-1">
                        {pages.map((page, index) => (
                            <li key={index}>
                                <a href={page.link}>{page.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end sm:hidden">
                    <DropDownMenu />
                </div>
            </div>
        </div>
    );
};

export default Header;