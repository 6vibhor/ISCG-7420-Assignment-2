import React from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { logout } from "../common/utils";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <header class="topbar" data-navbarbg="skin5">
          <nav class="navbar top-navbar navbar-expand-md navbar-blue">
            <div
              class="navbar-collapse collapse"
              id="navbarSupportedContent"
              data-navbarbg="skin5"
              
            >
              <ul class="navbar-nav ms-auto d-flex align-items-center">
                <li>
                  <a class="profile-pic" href="#">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                      alt="user-img"
                      width="36"
                      class="img-circle"
                    />
                    <span class="text-white font-medium">Admin</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <aside class="left-sidebar" data-sidebarbg="skin6">
          <div class="scroll-sidebar">
            <nav class="sidebar-nav">
              <ul id="sidebarnav">
                <li class="sidebar-item pt-2">
                  <Link to="semester">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      aria-expanded="false"
                    >
                      <i class="fas fa-warehouse" aria-hidden="true"></i>
                      <span class="hide-menu">Home</span>
                    </a>
                  </Link>
                </li>
                <li class="sidebar-item pt-2">
                  <Link to="course">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      aria-expanded="false"
                    >
                      <i class=" fas fa-window-restore" aria-hidden="true"></i>
                      <span class="hide-menu">Course</span>
                    </a>
                  </Link>
                </li>
                <li class="sidebar-item pt-2">
                  <Link to="class">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      aria-expanded="false"
                    >
                      <i class="fas fa-university" aria-hidden="true"></i>
                      <span class="hide-menu">Classes</span>
                    </a>
                  </Link>
                </li>
                <li class="sidebar-item pt-2">
                  <Link to="lecture">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      aria-expanded="false"
                    >
                      <i class="fas fa-users" aria-hidden="true"></i>
                      <span class="hide-menu">Lectures</span>
                    </a>
                  </Link>
                </li>
                <li class="sidebar-item pt-2">
                  <Link to="student">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      aria-expanded="false"
                    >
                      <i class="fas fa-users" aria-hidden="true"></i>
                      <span class="hide-menu">Students</span>
                    </a>
                  </Link>
                </li>
                <li class="sidebar-item pt-2">
                  <Link to="enrolls">
                    <a
                      class="sidebar-link waves-effect waves-dark sidebar-link"
                      aria-expanded="false"
                    >
                      <i class="fas fa-id-card" aria-hidden="true"></i>
                      <span class="hide-menu">Enrolls</span>
                    </a>
                  </Link>
                </li>
                <li class="sidebar-item pt-2">
                  <a
                    onClick={() => logout("admin", navigate)}
                    class="sidebar-link waves-effect waves-dark sidebar-link"
                    aria-expanded="false"
                  >
                    <i class=" fas fa-arrow-left" aria-hidden="true"></i>
                    <span class="hide-menu">Loout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <div class="page-wrapper ">
          <div className="container-fluid">
            <Outlet />
          </div>
          <footer class="footer text-center"> 2022 © GradeBook </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
