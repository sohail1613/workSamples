import React from "react";

const Header = () => {
  return (
    <>
      <header className="afc-header afc-header--style-1 afc-header--dark normal">
        <div className="afc-header__navbar">
          <div className="afc-header__container container-fluid">
            <div className="afc-header__navbar__inner">
              <div className="afc-header__navbar__logo">
                <button
                  className="afc-button afc-button--toggle--menu afc-menu-btn afc-menu-btn--hamburger"
                  type="button"
                >
                  <span />
                  <span />
                  <span />
                </button>
                <a href="#">
                  <span>Makina</span>
                </a>
              </div>
              <nav className="afc-header__navbar__links d-none d-lg-block d-xl-block">
                <ul className="afc-header__navbar__menu d-flex justify-content-center">
                  <li
                    id="nav-menu-item-1497"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1497"
                    data-menu-anchor
                  >
                    <a href="#">Home</a>
                    {/* <ul className="sub-menu">
                      <li
                        id="nav-menu-item-2165"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2165"
                      >
                        <a href="http://wp.afracode.com/mitra/personal-1/">
                          Personal – 1
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-2164"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2164"
                      >
                        <a href="http://wp.afracode.com/mitra/personal-2/">
                          Personal – 2
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-2163"
                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-438 current_page_item menu-item-2163"
                      >
                        <a href="http://wp.afracode.com/mitra/personal-3/">
                          Personal – 3
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li
                    id="nav-menu-item-1498"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1498"
                    data-menu-anchor
                  >
                    <a href="#">
                      About Us
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-2158"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2158"
                      >
                        <a href="#">
                          About – Agency
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-2159"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2159"
                      >
                        <a href="#">
                          About – Personal
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="nav-menu-item-1499"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1499"
                    data-menu-anchor
                  >
                    <a href="http://wp.afracode.com/mitra/personal-3/#">
                      Products
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-2155"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2155"
                      >
                        <a href="http://wp.afracode.com/mitra/portfolio-metro-style-1/">
                          Metro Style-1
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-2154"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2154"
                      >
                        <a href="http://wp.afracode.com/mitra/portfolio-3-columns/">
                          3-columns
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="nav-menu-item-1500"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1500"
                    data-menu-anchor
                  >
                    <a href="http://wp.afracode.com/mitra/personal-3/#">
                      Services
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-2160"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2160"
                      >
                        <a href="http://wp.afracode.com/mitra/services-agency/">
                          Services – Agency
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-2161"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2161"
                      >
                        <a href="http://wp.afracode.com/mitra/services-personal/">
                          Services – Personal
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="nav-menu-item-1501"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1501"
                    data-menu-anchor
                  >
                    <a href="http://wp.afracode.com/mitra/personal-3/#">UpComing</a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-3454"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3454"
                      >
                        <a href="http://wp.afracode.com/mitra/blog-3-columns/">
                          Blog – 3 Columns
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-3453"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3453"
                      >
                        <a href="http://wp.afracode.com/mitra/blog-chess-style/">
                          Blog – Chess Style
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="nav-menu-item-1502"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1502"
                    data-menu-anchor
                  >
                    <a href="http://wp.afracode.com/mitra/personal-3/#">
                      Contacts
                    </a>
                    <ul className="sub-menu">
                      <li
                        id="nav-menu-item-2183"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2183"
                      >
                        <a href="http://wp.afracode.com/mitra/contacts-agency/">
                          Contacts – Agency
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <nav className="afc-header__navbar__icons">
                <ul>
                  <li>
                    <button
                      className="afc-button afc-button--icon js-toggle--search-form"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                      >
                        <g />
                        <path d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
