import React, { useEffect, useState } from "react";
import RoutingPaths from "../../helper/routingPaths";
import CompanyLogo from "../../assets/vyionLogo/vi.png";
import "./index.css";
import { Button, Link, Menu, MenuItem, Sidebar, Splitter, Swal, toast, ToastContainer, useNavigate } from "../../libraries";


const SidebarComponent = ({ props, callBack }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const SidebarList = [
    {
      id: 1,
      title: "Home",
      path: RoutingPaths.home,
      icon: "pi pi-home me-2",
      subSections: [],
      isShowSection: false,
    },
    {
      id: 2,
      title: "Clients",
      path: RoutingPaths.clientList,
      icon: "pi pi-user me-2",
      subSections: [],
      isShowSection: false,
    },
    
    {
        id: 5,
        title: "Business",
        path: RoutingPaths.businessList,
        icon: "pi pi-building me-2",
        subSections: [],
        isShowSection: false,
    },
    {
        id: 6,
        title: "Bank Info",
        path: RoutingPaths.bankDetailsList,
        icon: "pi pi-building me-2",
        subSections: [],
        isShowSection: false,
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 768;

  // MARK: Use Effect Method
  useEffect(() => {
    setIsOpen(props);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [props]);

  //  we can pass string/ any value from B To A that would be defined inside the function for example, callBack({key: "abc"})
  const tapOnCrossButton = () => {
    callBack();
  };

  const tapOnSidebarLink = () => {
    if (isMobile) {
      callBack();
    }
  };

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
        signOutApi();
      }
    });
  };

  const signOutApi = async () => {
    const token = localStorage.getItem("token");

    try {
      // await getSignOutApi(token);

      localStorage.clear();
      navigate(RoutingPaths.login);  
    } catch (error) {
      toast.error( error);
      <ToastContainer/>
    }
  };

  return (
    <>
      <div
        className={isOpen ? "sidebar__background__blur" : ""}
        onClick={tapOnSidebarLink}
      >
        <div
          className={
            isOpen
              ? "card flex  position-fixed sidebar__open"
              : "sidebar__close"
          }
          id="sidebar__style"
        >
          <div style={{ justifySelf: "center" }}>
            <span className="inline-flex">
              <img
                src={CompanyLogo}
                alt="logo"
                className="sidebar__company-logo"
              />
            </span>
            <span>
              <Button
                type="button"
                onClick={tapOnCrossButton}
                icon="pi pi-times"
                className="sidebar__cross_button"
              ></Button>
            </span>
          </div>
          <Splitter />

          <div className="pt-2">
            <h5
              className="text-white ms-2 mb-3 mt-3"
              style={{ paddingLeft: "1.5rem" }}
            >
              Menu
            </h5>

            <Sidebar>
              <Menu>
                {SidebarList.map((sidebarobject) => (
                  <>
                    <MenuItem
                      component={<Link to={sidebarobject.path} />}
                      key={sidebarobject.id}
                    >
                      <i className={sidebarobject.icon}></i>
                      {sidebarobject.title}
                    </MenuItem>
                  </>
                ))}
              </Menu>
            </Sidebar>
            <div style={{marginTop: "10.9rem"}}>
            <hr className="sidebar__separator"></hr>
            <button
              className="dropdown-item ps-4"
              type="button"
              onClick={tapOnSignOutConfirm}
              style={{
                textTransform: "capitalize",
                paddingTop: ".6rem",
                paddingBottom: "0.6rem",
                marginTop: "16rem"
              }}
            >
              <i className="pi pi-sign-out pe-2"></i>sign out
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
