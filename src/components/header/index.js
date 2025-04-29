import React from "react";
import CompanyLogo from "../../assets/vyionLogo/vi.png";
import RoutingPaths from "../../helper/routingPaths";
import { Avatar, Swal, toast, ToastContainer, useNavigate } from "../../libraries";
import { signOutUser } from "../api";
import "./index.css";


function Header({ navbarCallBack }) {
    const navigate = useNavigate();


    const tapOnSignOutConfirm = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to sign out.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "var(--red-color)",
            cancelButtonColor: "var(--secondary-color)",
            confirmButtonText: "Yes!",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.value) {
                signOutUser(navigate, toast);            
             }
        });
    };

    const toggleSidebar = () => {
        navbarCallBack();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light ps-3 pe-5 main__navbar_div">
            <div className="flex-grow-1">
                <button
                    className="navbar-toggler d-block"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleSidebar}
                >
                    <span className="navbar-toggler-icon d-block"></span>
                </button>
            </div>

            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <Avatar icon="pi pi-user" />
                        </a>
                        <div
                            className="dropdown-menu position-absolute pt-0 pb-0"
                            aria-labelledby="navbarDropdown"
                        >
                            <ul className="m-0 p-0">
                                <li className="p-0 text-center">
                                    <img
                                        src={CompanyLogo}
                                        alt="logo"
                                        style={{
                                            height: "5rem",
                                            width: "10rem",
                                            textAlign: "center",
                                        }}
                                    />
                                </li>

                                <div className="dropdown-divider m-0"></div>


                            </ul>

                            <a className="dropdown-item" href={RoutingPaths.profile}>
                                <i className="pi pi-user pe-2"></i>profile
                            </a>
                            <div className="dropdown-divider m-0"></div>
                            <button
                                className="dropdown-item"
                                type="button"
                                onClick={tapOnSignOutConfirm}
                                style={{ textTransform: "capitalize", paddingTop: ".6rem", paddingBottom: '0.6rem' }}
                            >
                                <i className="pi pi-sign-out pe-2"></i>sign out
                            </button>
                            <ToastContainer />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
