import React from "react";

const Section = () => {
  return (
    <>
      <div>
        <div className="afc-fullscreen-menu afc-fullscreen-menu--style-3">
          {/* <div className="afc-fullscreen-menu__content">
            <ul className="afc-fullscreen-menu__content__menu afc-menu">
              <li
                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1497"
                data-menu-anchor
              >
                <a href="http://wp.afracode.com/mitra/personal-3/#">Home</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2165">
                    <a href="http://wp.afracode.com/mitra/personal-1/">
                      Personal – 1
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2164">
                    <a href="http://wp.afracode.com/mitra/personal-2/">
                      Personal – 2
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-438 current_page_item menu-item-2163">
                    <a href="http://wp.afracode.com/mitra/personal-3/">
                      Personal – 3
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1498"
                data-menu-anchor
              >
                <a href="http://wp.afracode.com/mitra/personal-3/#">About Us</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2158">
                    <a href="http://wp.afracode.com/mitra/about-us-agency/">
                      About – Agency
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2159">
                    <a href="http://wp.afracode.com/mitra/about-me-personal/">
                      About – Personal
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1499"
                data-menu-anchor
              >
                <a href="http://wp.afracode.com/mitra/personal-3/#">
                  Portfolio
                </a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2155">
                    <a href="http://wp.afracode.com/mitra/portfolio-metro-style-1/">
                      Metro Style-1
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2154">
                    <a href="http://wp.afracode.com/mitra/portfolio-3-columns/">
                      3-columns
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1500"
                data-menu-anchor
              >
                <a href="http://wp.afracode.com/mitra/personal-3/#">Services</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2160">
                    <a href="http://wp.afracode.com/mitra/services-agency/">
                      Services – Agency
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2161">
                    <a href="http://wp.afracode.com/mitra/services-personal/">
                      Services – Personal
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1501"
                data-menu-anchor
              >
                <a href="http://wp.afracode.com/mitra/personal-3/#">Blog</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3454">
                    <a href="http://wp.afracode.com/mitra/blog-3-columns/">
                      Blog – 3 Columns
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3453">
                    <a href="http://wp.afracode.com/mitra/blog-chess-style/">
                      Blog – Chess Style
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1502"
                data-menu-anchor
              >
                <a href="http://wp.afracode.com/mitra/personal-3/#">Contacts</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2183">
                    <a href="http://wp.afracode.com/mitra/contacts-agency/">
                      Contacts – Agency
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}
          <div>
            <div className="afc-fullscreen-menu__logo afc-fullscreen-menu__logo--style-3">
              <button className="afc-button--toggle--menu js--toggle--menu afc-close-btn" />
            </div>
            <span className="afc-fullscreen-menu__overlay afc-fullscreen-menu__close" />
          </div>
        </div>
        <div className="afc-search-form afc-search-form--style-1">
          <div className="afc-search-form__logo afc-search-form__logo--style-1">
            <span className="afc-fullscreen-menu__logo__text">Mitra</span>
          </div>
          <button
            type="button"
            className="afc-button afc-button--close js-toggle--search-form afc-close-btn"
          >
            <span />
          </button>
          <div className="container">
            <form method="get" action="http://wp.afracode.com/mitra/">
              <input
                type="search"
                defaultValue
                placeholder="Type words and hit enter"
                name="s"
              />
              <button type="submit" className="afc-button afc-button--search">
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
            </form>
          </div>
        </div>
        <div className="afc-wrapper afc-wrapper--canvas">
          <article className="afc-page afc-page--canvas post-438 page type-page status-publish hentry">
            <div
              data-elementor-type="wp-page"
              data-elementor-id={438}
              className="elementor elementor-438"
              data-elementor-settings="[]"
            >
              <div className="elementor-inner">
                <div className="elementor-section-wrap">
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-0e27adf elementor-section-height-full elementor-section-items-stretch elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
                    data-id="0e27adf"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a1e5991"
                          data-id="a1e5991"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              {/* <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-f303b4a elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="f303b4a"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-default">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8c4db65"
                                      data-id="8c4db65"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="elementor-element elementor-element-857337c elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="857337c"
                                            data-element_type="widget"
                                            data-settings='{"afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h1 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      My name is
                                                      <br />
                                                      Aaron Smith.
                                                    </span>
                                                  </h1>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-2c757ce e-grid-align-left elementor-hidden-tablet elementor-hidden-mobile elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                                            data-id="2c757ce"
                                            data-element_type="widget"
                                            data-settings='{"afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="social-icons.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-social-icons-wrapper elementor-grid">
                                                <span className="elementor-grid-item">
                                                  <a
                                                    className="elementor-icon elementor-social-icon elementor-social-icon-dribbble elementor-repeater-item-5f9382f"
                                                    href="http://wp.afracode.com/mitra/personal-3/#"
                                                    target="_blank"
                                                  >
                                                    <span className="elementor-screen-only">
                                                      Dribbble
                                                    </span>
                                                    <i className="fab fa-dribbble" />
                                                  </a>
                                                </span>
                                                <span className="elementor-grid-item">
                                                  <a
                                                    className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-5e7e264"
                                                    href="http://wp.afracode.com/mitra/personal-3/#"
                                                    target="_blank"
                                                  >
                                                    <span className="elementor-screen-only">
                                                      Twitter
                                                    </span>
                                                    <i className="fab fa-twitter" />
                                                  </a>
                                                </span>
                                                <span className="elementor-grid-item">
                                                  <a
                                                    className="elementor-icon elementor-social-icon elementor-social-icon-tumblr elementor-repeater-item-a5b2942"
                                                    href="http://wp.afracode.com/mitra/personal-3/#"
                                                    target="_blank"
                                                  >
                                                    <span className="elementor-screen-only">
                                                      Tumblr
                                                    </span>
                                                    <i className="fab fa-tumblr" />
                                                  </a>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-05e420f"
                                      data-id="05e420f"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="elementor-element elementor-element-0be7b46 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-afracode-creative-tag"
                                            data-id="0be7b46"
                                            data-element_type="widget"
                                            data-settings='{"afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="afracode-creative-tag.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div>
                                                <div className="afc-creative-tag afc-creative-tag--style-2">
                                                  <span className="afc-creative-tag__text">
                                                    This is me
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-017c337 elementor-align-right elementor-tablet-align-left elementor-hidden-mobile elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="017c337"
                                            data-element_type="widget"
                                            data-settings='{"afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h4 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      Experience Developer and
                                                      <br />
                                                      Designer remotely from
                                                      <br />
                                                      untied states.
                                                    </span>
                                                  </h4>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-5d305ba elementor-align-right elementor-tablet-align-left elementor-widget elementor-widget-afracode-button"
                                            data-id="5d305ba"
                                            data-element_type="widget"
                                            data-settings='{"afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="afracode-button.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <a
                                                role="button"
                                                className="afc-button afc-button--sm afc-button--style-1 afc-button--dark"
                                                href="http://wp.afracode.com/mitra/personal-3/#"
                                                data-hover="Download CV"
                                              >
                                                <span className="afc-button__text">
                                                  Download CV
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section> */}
                              {/* <div
                                data-parallax='{"y":90,"scale":1}'
                                className="elementor-element elementor-element-bdff85d elementor-absolute elementor-widget elementor-widget-image"
                                data-id="bdff85d"
                                data-element_type="widget"
                                data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                data-widget_type="image.default"
                                style={{
                                  "-webkit-transform":
                                    "translate3d(0px, 0.029px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1) scaleY(1) scaleZ(1)",
                                  "-ms-transform":
                                    "translate3d(0px, 0.029px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1) scaleY(1) scaleZ(1)",
                                  transform:
                                    "translate3d(0px, 0.029px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1) scaleY(1) scaleZ(1)",
                                }}
                              > */}
                                {/* <div className="elementor-widget-container">
                                  <div className="elementor-image">
                                    <img
                                      decoding="async"
                                      width={600}
                                      height={600}
                                      src="./Personal – 3 – Mitra_files/business-25-600x600.jpg"
                                      className="attachment-mitra-600x600 size-mitra-600x600"
                                      alt="image"
                                      loading="lazy"
                                      srcSet="
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/business-25-600x600.jpg 600w,
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/business-25-300x300.jpg 300w,
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/business-25-150x150.jpg 150w
                            "
                                      sizes="(max-width: 600px) 100vw, 600px"
                                    />
                                  </div>
                                </div>
                              </div> */}
                              {/* <div
                                data-parallax='{"x":60,"y":60,"scale":1}'
                                className="elementor-element elementor-element-1d78f89 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-afracode-shape"
                                data-id="1d78f89"
                                data-element_type="widget"
                                data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                data-widget_type="afracode-shape.default"
                                style={{
                                  "-webkit-transform":
                                    "translate3d(                                  0.029px,                                  0.029px,                                  0px                                )                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1) scaleY(1) scaleZ(1)",
                                  "-ms-transform":
                                    "translate3d(0.029px, 0.029px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1) scaleY(1) scaleZ(1)",
                                  transform:
                                    "translate3d(0.029px, 0.029px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1) scaleY(1) scaleZ(1)",
                                }}
                              >
                                <div className="elementor-widget-container">
                                  <div className="afc-shape">
                                    <div className="afc-shape__element afc-shape__element--circle" />
                                  </div>
                                </div>
                              </div> */}
                              <div
                                data-parallax="[]"
                                className="elementor-element elementor-element-584176c elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-afracode-shape"
                                data-id="584176c"
                                data-element_type="widget"
                                data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                data-widget_type="afracode-shape.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="afc-shape">
                                    <div className="afc-shape__element afc-shape__element--circle" />
                                  </div>
                                </div>
                              </div>
                              <div
                                data-parallax='{"scale":1.5}'
                                className="elementor-element elementor-element-2bb14c2 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-afracode-shape"
                                data-id="2bb14c2"
                                data-element_type="widget"
                                data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                data-widget_type="afracode-shape.default"
                                style={{
                                  "-webkit-transform":
                                    "translate3d(0px, 0px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1.029) scaleY(1.029) scaleZ(1.029)",
                                  "-ms-transform":
                                    "translate3d(0px, 0px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1.029) scaleY(1.029) scaleZ(1.029)",
                                  transform:
                                    "translate3d(0px, 0px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1.029) scaleY(1.029) scaleZ(1.029)",
                                }}
                              >
                                <div className="elementor-widget-container">
                                  <div className="afc-shape">
                                    <div className="afc-shape__element afc-shape__element--circle" />
                                  </div>
                                </div>
                              </div>
                              <div
                                data-parallax='{"scale":1.5}'
                                className="elementor-element elementor-element-20988ad elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-afracode-shape"
                                data-id="20988ad"
                                data-element_type="widget"
                                data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                data-widget_type="afracode-shape.default"
                                style={{
                                  "-webkit-transform":
                                    "translate3d(0px, 0px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1.029) scaleY(1.029) scaleZ(1.029)",
                                  "-ms-transform":
                                    "translate3d(0px, 0px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1.029) scaleY(1.029) scaleZ(1.029)",
                                  transform:
                                    "translate3d(0px, 0px, 0px)                                rotateX(0deg) rotateY(0deg) rotateZ(0deg)                                scaleX(1.029) scaleY(1.029) scaleZ(1.029)",
                                }}
                              >
                                <div className="elementor-widget-container">
                                  <div className="afc-shape">
                                    <div className="afc-shape__element afc-shape__element--circle" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-281f8cb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="281f8cb"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e2661b0"
                          data-id="e2661b0"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-c4cac5b elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="c4cac5b"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e6555fe"
                                      data-id="e6555fe"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-0ca1fa5 elementor-widget elementor-widget-afracode-creative-tag"
                                            data-id="0ca1fa5"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-creative-tag.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div>
                                                <div className="afc-creative-tag afc-creative-tag--style-1">
                                                  <span className="afc-creative-tag__text">
                                                    HIGH QUALITY
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-d817f66 elementor-align-left elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="d817f66"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      Completed 1200+ Projects
                                                      <br />
                                                      Successfully
                                                    </span>
                                                  </h2>
                                                  <p className="afc-heading__subtitle">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut elit tellus, luctus nec
                                                    ullamcorper mattis, pulvinar
                                                    dapibus leo.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e2271a6"
                                      data-id="e2271a6"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-463e02f elementor-align-center elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="463e02f"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-list afc-list--infobox">
                                                <div className="afc-list__content">
                                                  <div
                                                    className="row afc-row-sm"
                                                    style={{
                                                      "-webkit-box-pack":
                                                        "center",
                                                      "-webkit-justify-content":
                                                        "center",
                                                      "-ms-flex-pack": "center",
                                                      "justify-content":
                                                        "center",
                                                    }}
                                                  >
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                      <div className="afc-infobox-img">
                                                        <div className="afc-infobox-img__head" />
                                                        <div className="afc-infobox-img__body">
                                                          <h4 className="afc-infobox-img__title">
                                                            12k
                                                          </h4>
                                                          <p className="afc-infobox-img__description">
                                                            Finished Project
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                      <div className="afc-infobox-img">
                                                        <div className="afc-infobox-img__head" />
                                                        <div className="afc-infobox-img__body">
                                                          <h4 className="afc-infobox-img__title">
                                                            600+
                                                          </h4>
                                                          <p className="afc-infobox-img__description">
                                                            Finished Project
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                      <div className="afc-infobox-img">
                                                        <div className="afc-infobox-img__head" />
                                                        <div className="afc-infobox-img__body">
                                                          <h4 className="afc-infobox-img__title">
                                                            100%
                                                          </h4>
                                                          <p className="afc-infobox-img__description">
                                                            Client Satification
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-7fb5789 elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="7fb5789"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4397257"
                                      data-id={4397257}
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="elementor-element elementor-element-fddc8e9 elementor-widget elementor-widget-afracode-portfolio"
                                            data-id="fddc8e9"
                                            data-element_type="widget"
                                            data-settings='{"afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="afracode-portfolio.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-grid">
                                                <div>
                                                  <div>
                                                    <div className="afc-grid-row afc-grid-row--">
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={11}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                src="./Personal – 3 – Mitra_files/probe7.jpeg"
                                                                alt="image"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                                Social Media
                                                                Branding
                                                                Spotlight
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  Game
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="http://wp.afracode.com/mitra/portfolio/social-media-branding-spotlight/"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={11}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-10-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/grain_sampler.jpeg"
                                                                alt="image"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                                Mitra Board Game
                                                                v2.0
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  Game
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="http://wp.afracode.com/mitra/portfolio/mitra-board-game-v2-0/"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={10}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-11-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/weight_machine.avif"
                                                                alt="Online Music Player App"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                                Online Music
                                                                Player App
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  Audio
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="http://wp.afracode.com/mitra/portfolio/online-music-player-app/"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={7}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-12-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/electronic_tool.jpeg"
                                                                alt="Minimal Design Artwork"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                                Minimal Design
                                                                Artwork
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  Design
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="http://wp.afracode.com/mitra/portfolio/minimal-design-artwork/"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={13}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-13-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/msb_1.avif"
                                                                alt="Consumer Electronics"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                                Consumer
                                                                Electronics
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  Apps
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="http://wp.afracode.com/mitra/portfolio/consumer-electronics/"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="afc-grid-col"
                                                        data-filter={13}
                                                      >
                                                        <div className="afc-portfolio-item afc-portfolio-item--style-1 hover--zoom-in afc-portfolio-item--grid">
                                                          <div className="afc-portfolio-item__inner">
                                                            <div className="afc-portfolio-item__cover">
                                                              <img
                                                                decoding="async"
                                                                // src="./Personal – 3 – Mitra_files/New-Project-14-600x600.jpg"
                                                                src="./Personal – 3 – Mitra_files/msb_gab_301.avif"
                                                                alt="Home Appliances"
                                                              />
                                                            </div>
                                                            <div className="afc-portfolio-item__content">
                                                              <h5 className="afc-portfolio-item__title">
                                                                Home Appliances
                                                              </h5>
                                                              <div className="afc-categories afc-categories--style-1">
                                                                <span className="afc-portfolio-item__category afc-categories__item">
                                                                  Apps
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="afc-portfolio-item__link"
                                                            href="http://wp.afracode.com/mitra/portfolio/home-appliances/"
                                                            aria-hidden="true"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-0b33cf5 elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="0b33cf5"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b8b09c8"
                                      data-id="b8b09c8"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-f745588 elementor-align-center elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="f745588"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      Getting connected with us
                                                      &amp;
                                                      <br />
                                                      for the update.
                                                    </span>
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-28b7b4f elementor-widget elementor-widget-afracode-testimonial-carousel"
                                            data-id="28b7b4f"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-testimonial-carousel.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-carousel afc-carousel--widget afc-carousel--infobox afc-carousel--testimonial--style-2">
                                                <div className="afc-carousel__content">
                                                  <div
                                                    className="swiper swiper-container swiper-container-initialized swiper-container-horizontal"
                                                    data-loop="true"
                                                    data-autoplay="true"
                                                    data-center="true"
                                                    data-xs-breakpoint={1}
                                                    data-sm-breakpoint={1}
                                                    data-md-breakpoint={1}
                                                    data-lg-breakpoint={1}
                                                    data-xl-breakpoint={1}
                                                    data-xs-space-between={12}
                                                    data-md-space-between={24}
                                                    data-lg-space-between={30}
                                                    data-xl-space-between={30}
                                                  >
                                                    <div
                                                      className="swiper-wrapper"
                                                      style={{
                                                        "-webkit-transitionDuration":
                                                          "0ms",
                                                        transitionDuration:
                                                          "0ms",
                                                        "-webkit-transform":
                                                          "translate3d(                                                      -5600px,                                                      0px,                                                      0px                                                    )",
                                                        "-ms-transform":
                                                          "translate3d(                                                      -5600px,                                                      0px,                                                      0px                                                    )",
                                                        transform:
                                                          "translate3d(                                                      -5600px,                                                      0px,                                                      0px                                                    )",
                                                      }}
                                                    >
                                                      <div
                                                        className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                                                        data-swiper-slide-index={
                                                          3
                                                        }
                                                        style={{
                                                          width: "1090px",
                                                          "margin-right":
                                                            "30px",
                                                        }}
                                                      >
                                                        <div className="afc-testimonial afc-testimonial--style-2">
                                                          <div className="afc-testimonial__inner">
                                                            <div className="afc-testimonial__inner__symbol">
                                                              <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                width={17}
                                                                height={17}
                                                                viewBox="0 0 17 17"
                                                              >
                                                                <g />
                                                                <path d="M13.169 7.614c-0.734 0-1.417 0.227-1.982 0.612 1.23-3.472 3.991-3.88 4.134-3.898l-0.123-0.992c-0.051 0.006-5.126 0.704-5.563 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.584-3.529-3.529-3.529zM13.169 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.134 2.528-2.528 2.528zM3.733 7.614c-0.734 0-1.416 0.227-1.981 0.612 1.23-3.472 3.99-3.88 4.133-3.898l-0.123-0.992c-0.051 0.006-5.125 0.704-5.564 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.582-3.529-3.528-3.529zM3.733 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.133 2.528-2.528 2.528z" />
                                                              </svg>
                                                            </div>
                                                            <div className="afc-testimonial__inner__avatar">
                                                              <img
                                                                width={150}
                                                                height={150}
                                                                src="./Personal – 3 – Mitra_files/w1-150x150.jpg"
                                                                className="attachment-thumbnail size-thumbnail"
                                                                alt="image"
                                                                decoding="async"
                                                                loading="lazy"
                                                                srcSet="
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/w1-150x150.jpg 150w,
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/w1-600x600.jpg 600w
                                                      "
                                                                sizes="(max-width: 150px) 100vw, 150px"
                                                              />
                                                            </div>
                                                            <div className="afc-testimonial__inner__description">
                                                              <blockquote className="afc-blockquote">
                                                                <p>
                                                                  "You've saved
                                                                  our business!
                                                                  I can't say
                                                                  enough about
                                                                  you. We were
                                                                  treated like
                                                                  royalt="image"y.
                                                                  We can't
                                                                  understand how
                                                                  we've been
                                                                  living without
                                                                  you."
                                                                </p>
                                                              </blockquote>
                                                            </div>
                                                            <div className="afc-testimonial__inner__author">
                                                              <div className="d-flex">
                                                                <div>
                                                                  <h5 className="text-sm font-weight-bold">
                                                                    Miranda Fox
                                                                  </h5>
                                                                  <h6 className="text-sm">
                                                                    CEO of
                                                                    Atena-Motors
                                                                  </h6>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="swiper-slide swiper-slide-duplicate-active"
                                                        data-swiper-slide-index={
                                                          0
                                                        }
                                                        style={{
                                                          width: "1090px",
                                                          "margin-right":
                                                            "30px",
                                                        }}
                                                      >
                                                        <div className="afc-testimonial afc-testimonial--style-2">
                                                          <div className="afc-testimonial__inner">
                                                            <div className="afc-testimonial__inner__symbol">
                                                              <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                width={17}
                                                                height={17}
                                                                viewBox="0 0 17 17"
                                                              >
                                                                <g />
                                                                <path d="M13.169 7.614c-0.734 0-1.417 0.227-1.982 0.612 1.23-3.472 3.991-3.88 4.134-3.898l-0.123-0.992c-0.051 0.006-5.126 0.704-5.563 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.584-3.529-3.529-3.529zM13.169 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.134 2.528-2.528 2.528zM3.733 7.614c-0.734 0-1.416 0.227-1.981 0.612 1.23-3.472 3.99-3.88 4.133-3.898l-0.123-0.992c-0.051 0.006-5.125 0.704-5.564 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.582-3.529-3.528-3.529zM3.733 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.133 2.528-2.528 2.528z" />
                                                              </svg>
                                                            </div>
                                                            <div className="afc-testimonial__inner__avatar">
                                                              <img
                                                                width={150}
                                                                height={150}
                                                                src="./Personal – 3 – Mitra_files/lifestyle-55-150x150.jpg"
                                                                className="attachment-thumbnail size-thumbnail"
                                                                alt="image"
                                                                decoding="async"
                                                                loading="lazy"
                                                                srcSet="
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/lifestyle-55-150x150.jpg 150w,
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/lifestyle-55-600x600.jpg 600w
                                                      "
                                                                sizes="(max-width: 150px) 100vw, 150px"
                                                              />
                                                            </div>
                                                            <div className="afc-testimonial__inner__description">
                                                              <blockquote className="afc-blockquote">
                                                                <p>
                                                                  "You've saved
                                                                  our business!
                                                                  I can't say
                                                                  enough about
                                                                  you. We were
                                                                  treated like
                                                                  royalt="image"y.
                                                                  We can't
                                                                  understand how
                                                                  we've been
                                                                  living without
                                                                  you."
                                                                </p>
                                                              </blockquote>
                                                            </div>
                                                            <div className="afc-testimonial__inner__author">
                                                              <div className="d-flex">
                                                                <div>
                                                                  <h5 className="text-sm font-weight-bold">
                                                                    Jenny Trump
                                                                  </h5>
                                                                  <h6 className="text-sm">
                                                                    Web
                                                                    Developer
                                                                  </h6>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="swiper-slide"
                                                        data-swiper-slide-index={
                                                          1
                                                        }
                                                        style={{
                                                          width: "1090px",
                                                          "margin-right":
                                                            "30px",
                                                        }}
                                                      >
                                                        <div className="afc-testimonial afc-testimonial--style-2">
                                                          <div className="afc-testimonial__inner">
                                                            <div className="afc-testimonial__inner__symbol">
                                                              <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                width={17}
                                                                height={17}
                                                                viewBox="0 0 17 17"
                                                              >
                                                                <g />
                                                                <path d="M13.169 7.614c-0.734 0-1.417 0.227-1.982 0.612 1.23-3.472 3.991-3.88 4.134-3.898l-0.123-0.992c-0.051 0.006-5.126 0.704-5.563 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.584-3.529-3.529-3.529zM13.169 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.134 2.528-2.528 2.528zM3.733 7.614c-0.734 0-1.416 0.227-1.981 0.612 1.23-3.472 3.99-3.88 4.133-3.898l-0.123-0.992c-0.051 0.006-5.125 0.704-5.564 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.582-3.529-3.528-3.529zM3.733 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.133 2.528-2.528 2.528z" />
                                                              </svg>
                                                            </div>
                                                            <div className="afc-testimonial__inner__avatar">
                                                              <img
                                                                width={150}
                                                                height={150}
                                                                src="./Personal – 3 – Mitra_files/young-caucasian-man-wearing-hawaiian-shirt-isolated-yellow-background-showing-number-two-with-fingers-150x150.jpg"
                                                                className="attachment-thumbnail size-thumbnail"
                                                                alt="image"
                                                                decoding="async"
                                                                loading="lazy"
                                                                srcSet="
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/young-caucasian-man-wearing-hawaiian-shirt-isolated-yellow-background-showing-number-two-with-fingers-150x150.jpg 150w,
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/young-caucasian-man-wearing-hawaiian-shirt-isolated-yellow-background-showing-number-two-with-fingers-600x600.jpg 600w
                                                      "
                                                                sizes="(max-width: 150px) 100vw, 150px"
                                                              />
                                                            </div>
                                                            <div className="afc-testimonial__inner__description">
                                                              <blockquote className="afc-blockquote">
                                                                <p>
                                                                  "You've saved
                                                                  our business!
                                                                  I can't say
                                                                  enough about
                                                                  you. We were
                                                                  treated like
                                                                  royalt="image"y.
                                                                  We can't
                                                                  understand how
                                                                  we've been
                                                                  living without
                                                                  you."
                                                                </p>
                                                              </blockquote>
                                                            </div>
                                                            <div className="afc-testimonial__inner__author">
                                                              <div className="d-flex">
                                                                <div>
                                                                  <h5 className="text-sm font-weight-bold">
                                                                    Alex Smith
                                                                  </h5>
                                                                  <h6 className="text-sm">
                                                                    CEO of
                                                                    Tesla-Bikes
                                                                  </h6>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="swiper-slide"
                                                        data-swiper-slide-index={
                                                          2
                                                        }
                                                        style={{
                                                          width: "1090px",
                                                          "margin-right":
                                                            "30px",
                                                        }}
                                                      >
                                                        <div className="afc-testimonial afc-testimonial--style-2">
                                                          <div className="afc-testimonial__inner">
                                                            <div className="afc-testimonial__inner__symbol">
                                                              <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                width={17}
                                                                height={17}
                                                                viewBox="0 0 17 17"
                                                              >
                                                                <g />
                                                                <path d="M13.169 7.614c-0.734 0-1.417 0.227-1.982 0.612 1.23-3.472 3.991-3.88 4.134-3.898l-0.123-0.992c-0.051 0.006-5.126 0.704-5.563 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.584-3.529-3.529-3.529zM13.169 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.134 2.528-2.528 2.528zM3.733 7.614c-0.734 0-1.416 0.227-1.981 0.612 1.23-3.472 3.99-3.88 4.133-3.898l-0.123-0.992c-0.051 0.006-5.125 0.704-5.564 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.582-3.529-3.528-3.529zM3.733 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.133 2.528-2.528 2.528z" />
                                                              </svg>
                                                            </div>
                                                            <div className="afc-testimonial__inner__avatar">
                                                              <img
                                                                width={150}
                                                                height={150}
                                                                src="./Personal – 3 – Mitra_files/business-36-150x150.jpg"
                                                                className="attachment-thumbnail size-thumbnail"
                                                                alt="image"
                                                                decoding="async"
                                                                loading="lazy"
                                                                srcSet="
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/business-36-150x150.jpg 150w,
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/business-36-600x600.jpg 600w
                                                      "
                                                                sizes="(max-width: 150px) 100vw, 150px"
                                                              />
                                                            </div>
                                                            <div className="afc-testimonial__inner__description">
                                                              <blockquote className="afc-blockquote">
                                                                <p>
                                                                  "You've saved
                                                                  our business!
                                                                  I can't say
                                                                  enough about
                                                                  you. We were
                                                                  treated like
                                                                  royalt="image"y.
                                                                  We can't
                                                                  understand how
                                                                  we've been
                                                                  living without
                                                                  you."
                                                                </p>
                                                              </blockquote>
                                                            </div>
                                                            <div className="afc-testimonial__inner__author">
                                                              <div className="d-flex">
                                                                <div>
                                                                  <h5 className="text-sm font-weight-bold">
                                                                    John Woo
                                                                  </h5>
                                                                  <h6 className="text-sm">
                                                                    CEO of
                                                                    SpaceX
                                                                  </h6>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                                                        data-swiper-slide-index={
                                                          3
                                                        }
                                                        style={{
                                                          width: "1090px",
                                                          "margin-right":
                                                            "30px",
                                                        }}
                                                      >
                                                        <div className="afc-testimonial afc-testimonial--style-2">
                                                          <div className="afc-testimonial__inner">
                                                            <div className="afc-testimonial__inner__symbol">
                                                              <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                width={17}
                                                                height={17}
                                                                viewBox="0 0 17 17"
                                                              >
                                                                <g />
                                                                <path d="M13.169 7.614c-0.734 0-1.417 0.227-1.982 0.612 1.23-3.472 3.991-3.88 4.134-3.898l-0.123-0.992c-0.051 0.006-5.126 0.704-5.563 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.584-3.529-3.529-3.529zM13.169 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.134 2.528-2.528 2.528zM3.733 7.614c-0.734 0-1.416 0.227-1.981 0.612 1.23-3.472 3.99-3.88 4.133-3.898l-0.123-0.992c-0.051 0.006-5.125 0.704-5.564 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.582-3.529-3.528-3.529zM3.733 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.133 2.528-2.528 2.528z" />
                                                              </svg>
                                                            </div>
                                                            <div className="afc-testimonial__inner__avatar">
                                                              <img
                                                                width={150}
                                                                height={150}
                                                                src="./Personal – 3 – Mitra_files/w1-150x150.jpg"
                                                                className="attachment-thumbnail size-thumbnail"
                                                                alt="image"
                                                                decoding="async"
                                                                loading="lazy"
                                                                srcSet="
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/w1-150x150.jpg 150w,
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/w1-600x600.jpg 600w
                                                      "
                                                                sizes="(max-width: 150px) 100vw, 150px"
                                                              />
                                                            </div>
                                                            <div className="afc-testimonial__inner__description">
                                                              <blockquote className="afc-blockquote">
                                                                <p>
                                                                  "You've saved
                                                                  our business!
                                                                  I can't say
                                                                  enough about
                                                                  you. We were
                                                                  treated like
                                                                  royalt="image"y.
                                                                  We can't
                                                                  understand how
                                                                  we've been
                                                                  living without
                                                                  you."
                                                                </p>
                                                              </blockquote>
                                                            </div>
                                                            <div className="afc-testimonial__inner__author">
                                                              <div className="d-flex">
                                                                <div>
                                                                  <h5 className="text-sm font-weight-bold">
                                                                    Miranda Fox
                                                                  </h5>
                                                                  <h6 className="text-sm">
                                                                    CEO of
                                                                    Atena-Motors
                                                                  </h6>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                                                        data-swiper-slide-index={
                                                          0
                                                        }
                                                        style={{
                                                          width: "1090px",
                                                          "margin-right":
                                                            "30px",
                                                        }}
                                                      >
                                                        <div className="afc-testimonial afc-testimonial--style-2">
                                                          <div className="afc-testimonial__inner">
                                                            <div className="afc-testimonial__inner__symbol">
                                                              <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                width={17}
                                                                height={17}
                                                                viewBox="0 0 17 17"
                                                              >
                                                                <g />
                                                                <path d="M13.169 7.614c-0.734 0-1.417 0.227-1.982 0.612 1.23-3.472 3.991-3.88 4.134-3.898l-0.123-0.992c-0.051 0.006-5.126 0.704-5.563 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.584-3.529-3.529-3.529zM13.169 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.134 2.528-2.528 2.528zM3.733 7.614c-0.734 0-1.416 0.227-1.981 0.612 1.23-3.472 3.99-3.88 4.133-3.898l-0.123-0.992c-0.051 0.006-5.125 0.704-5.564 7.725l0.015 0.001c0 0.027-0.008 0.054-0.008 0.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.582-3.529-3.528-3.529zM3.733 13.671c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.133 2.528-2.528 2.528z" />
                                                              </svg>
                                                            </div>
                                                            <div className="afc-testimonial__inner__avatar">
                                                              <img
                                                                width={150}
                                                                height={150}
                                                                src="./Personal – 3 – Mitra_files/lifestyle-55-150x150.jpg"
                                                                className="attachment-thumbnail size-thumbnail"
                                                                alt="image"
                                                                decoding="async"
                                                                loading="lazy"
                                                                srcSet="
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/lifestyle-55-150x150.jpg 150w,
                                                        http://wp.afracode.com/mitra/wp-content/uploads/2022/01/lifestyle-55-600x600.jpg 600w
                                                      "
                                                                sizes="(max-width: 150px) 100vw, 150px"
                                                              />
                                                            </div>
                                                            <div className="afc-testimonial__inner__description">
                                                              <blockquote className="afc-blockquote">
                                                                <p>
                                                                  "You've saved
                                                                  our business!
                                                                  I can't say
                                                                  enough about
                                                                  you. We were
                                                                  treated like
                                                                  royalt="image"y.
                                                                  We can't
                                                                  understand how
                                                                  we've been
                                                                  living without
                                                                  you."
                                                                </p>
                                                              </blockquote>
                                                            </div>
                                                            <div className="afc-testimonial__inner__author">
                                                              <div className="d-flex">
                                                                <div>
                                                                  <h5 className="text-sm font-weight-bold">
                                                                    Jenny Trump
                                                                  </h5>
                                                                  <h6 className="text-sm">
                                                                    Web
                                                                    Developer
                                                                  </h6>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <span
                                                      className="swiper-notification"
                                                      aria-live="assertive"
                                                      aria-atomic="true"
                                                    />
                                                    <span
                                                      className="swiper-notification"
                                                      aria-live="assertive"
                                                      aria-atomic="true"
                                                    />
                                                    <span
                                                      className="swiper-notification"
                                                      aria-live="assertive"
                                                      aria-atomic="true"
                                                    />
                                                    <span
                                                      className="swiper-notification"
                                                      aria-live="assertive"
                                                      aria-atomic="true"
                                                    />
                                                    <span
                                                      className="swiper-notification"
                                                      aria-live="assertive"
                                                      aria-atomic="true"
                                                    />
                                                    <span
                                                      className="swiper-notification"
                                                      aria-live="assertive"
                                                      aria-atomic="true"
                                                    />
                                                    <span
                                                      className="swiper-notification"
                                                      aria-live="assertive"
                                                      aria-atomic="true"
                                                    />
                                                    <span
                                                      className="swiper-notification"
                                                      aria-live="assertive"
                                                      aria-atomic="true"
                                                    />
                                                  </div>
                                                  <div
                                                    className="afc-swiper__button afc-swiper__button--prev"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Previous slide"
                                                  >
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      width={17}
                                                      height={17}
                                                      viewBox="0 0 17 17"
                                                    >
                                                      <g />
                                                      <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z" />
                                                    </svg>
                                                  </div>
                                                  <div
                                                    className="afc-swiper__button afc-swiper__button--next"
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label="Next slide"
                                                  >
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      width={17}
                                                      height={17}
                                                      viewBox="0 0 17 17"
                                                    >
                                                      <g />
                                                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="wow afc-animate-widget fadeInDown elementor-element elementor-element-f44331e elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-afracode-shape"
                                            data-wow-duration="2400ms"
                                            data-wow-delay="600ms"
                                            data-id="f44331e"
                                            data-element_type="widget"
                                            data-settings='{"_position":"absolute","afc_animation_name":"fadeInDown","afc_animation_duration":2400,"afc_transform":"none"}'
                                            data-widget_type="afracode-shape.default"
                                            style={{
                                              visibility: "visible",
                                              WebkitAnimationDuration: "2400ms",
                                              animationDuration: "2400ms",
                                              WebkitAnimationDelay: "600ms",
                                              animationDelay: "600ms",
                                              "-webkit-animation-name":
                                                "_fadeInDown",
                                              "animation-name": "_fadeInDown",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-shape">
                                                <div className="afc-shape__element afc-shape__element--circle" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <div
                                className="elementor-element elementor-element-39fa673 elementor-absolute elementor-widget elementor-widget-image"
                                data-id="39fa673"
                                data-element_type="widget"
                                data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-image">
                                    <img
                                      decoding="async"
                                      width={819}
                                      height={403}
                                      src="./Personal – 3 – Mitra_files/kindpng_686416.png"
                                      className="attachment-mitra-1280x720_crop size-mitra-1280x720_crop"
                                      alt="image"
                                      loading="lazy"
                                      srcSet="
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/kindpng_686416.png         819w,
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/kindpng_686416-300x148.png 300w,
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/kindpng_686416-768x378.png 768w,
                              http://wp.afracode.com/mitra/wp-content/uploads/2022/01/kindpng_686416-800x394.png 800w
                            "
                                      sizes="(max-width: 819px) 100vw, 819px"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-b8bd22c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="b8bd22c"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c5f1e62"
                          data-id="c5f1e62"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-135fbed elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="135fbed"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-97d1828"
                                      data-id="97d1828"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeIn elementor-element elementor-element-f69374e elementor-align-center elementor-widget elementor-widget-afracode-creative-tag"
                                            data-id="f69374e"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeIn","afc_transform":"none"}'
                                            data-widget_type="afracode-creative-tag.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeIn",
                                              "animation-name": "_fadeIn",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div>
                                                <div className="afc-creative-tag afc-creative-tag--style-1">
                                                  <span className="afc-creative-tag__text">
                                                    {/* Services */}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-ec136d1 elementor-align-center elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="ec136d1"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      {/* Special Quotes from <br /> */}
                                                      Our Services.
                                                    </span>
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            data-parallax='{"y":60,"scale":1.5}'
                                            className="elementor-element elementor-element-0a99e32 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-afracode-shape"
                                            data-id="0a99e32"
                                            data-element_type="widget"
                                            data-settings='{"_position":"absolute","afc_transform":"none","afc_animation_name":"none"}'
                                            data-widget_type="afracode-shape.default"
                                            style={{
                                              "-webkit-transform":
                                                "translate3d(                                              0px,                                              0.029px,                                              0px                                            )                                            rotateX(0deg) rotateY(0deg)                                            rotateZ(0deg) scaleX(1.029)                                            scaleY(1.029) scaleZ(1.029)",
                                              "-ms-transform":
                                                "translate3d(                                              0px,                                              0.029px,                                              0px                                            )                                            rotateX(0deg) rotateY(0deg)                                            rotateZ(0deg) scaleX(1.029)                                            scaleY(1.029) scaleZ(1.029)",
                                              transform:
                                                "translate3d(                                              0px,                                              0.029px,                                              0px                                            )                                            rotateX(0deg) rotateY(0deg)                                            rotateZ(0deg) scaleX(1.029)                                            scaleY(1.029) scaleZ(1.029)",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-shape">
                                                <div className="afc-shape__element afc-shape__element--circle" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-a75e397 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="a75e397"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ea850b4"
                                      data-id="ea850b4"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-c777191 elementor-align-left elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="c777191"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img afc-infobox-img--style-1">
                                                <div className="afc-infobox-img__head">
                                                  <span className="afc-infobox-img__icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="far fa-gem"
                                                    />
                                                  </span>
                                                </div>
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    Makina
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    Lorem ipsum dolor sit amet
                                                    Consectetur adipisicing
                                                    elit.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9a9f776"
                                      data-id="9a9f776"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-5a60fa0 elementor-align-left elementor-widget elementor-widget-afracode-infobox-image"
                                            data-wow-delay="200ms"
                                            data-id="5a60fa0"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              WebkitAnimationDelay: "200ms",
                                              animationDelay: "200ms",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img afc-infobox-img--style-1">
                                                <div className="afc-infobox-img__head">
                                                  <span className="afc-infobox-img__icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="far fa-sun"
                                                    />
                                                  </span>
                                                </div>
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    Electronic
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    Lorem ipsum dolor sit amet
                                                    Consectetur adipisicing
                                                    elit.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5b95b93 elementor-hidden-tablet"
                                      data-id="5b95b93"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-84416f0 elementor-align-left elementor-widget elementor-widget-afracode-infobox-image"
                                            data-wow-delay="400ms"
                                            data-id="84416f0"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              WebkitAnimationDelay: "400ms",
                                              animationDelay: "400ms",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img afc-infobox-img--style-1">
                                                <div className="afc-infobox-img__head">
                                                  <span className="afc-infobox-img__icon">
                                                    <i
                                                      aria-hidden="true"
                                                      className="fas fa-chart-pie"
                                                    />
                                                  </span>
                                                </div>
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    Transportation
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    Lorem ipsum dolor sit amet
                                                    Consectetur adipisicing
                                                    elit.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-d29fba2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="d29fba2"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-background-overlay" />
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-68ce8c1"
                          data-id="68ce8c1"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-790c098 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="790c098"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-default">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-21e8306"
                                      data-id="21e8306"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-c7026b3 elementor-align-center elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="c7026b3"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      Completed 1200+ Projects
                                                      <br />
                                                      Successfully
                                                    </span>
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-e4c1e00 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="e4c1e00"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-extended">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-60dde88"
                                      data-id="60dde88"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-f44ba8e elementor-align-center elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="f44ba8e"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img">
                                                <div className="afc-infobox-img__head" />
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    120+
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    Finished Projects
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0a80eb3"
                                      data-id="0a80eb3"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-cb640c6 elementor-align-center elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="cb640c6"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img">
                                                <div className="afc-infobox-img__head" />
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    100+
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    Happy  and Satisfied Customers
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-cfad321"
                                      data-id="cfad321"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-8f9ad71 elementor-align-center elementor-widget elementor-widget-afracode-infobox-image"
                                            data-id="8f9ad71"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-infobox-image.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-infobox-img">
                                                <div className="afc-infobox-img__head" />
                                                <div className="afc-infobox-img__body">
                                                  <h4 className="afc-infobox-img__title">
                                                    1000
                                                  </h4>
                                                  <p className="afc-infobox-img__description">
                                                    Global Customer
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* work section */}
                  {/* <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-2f984e0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="2f984e0"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2f1f52e"
                          data-id="2f1f52e"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-761906e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="761906e"
                                data-element_type="section"
                              >
                                <div className="elementor-container elementor-column-gap-no">
                                  <div className="elementor-row">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3ad6bac"
                                      data-id="3ad6bac"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInUpSm elementor-element elementor-element-b09d85f elementor-mobile-align-center elementor-widget elementor-widget-afracode-heading-title"
                                            data-id="b09d85f"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInUpSm","afc_transform":"none"}'
                                            data-widget_type="afracode-heading-title.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInUpSm",
                                              "animation-name": "_fadeInUpSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="afc-heading afc-heading--style-1">
                                                <div>
                                                  <h2 className="afc-heading__title default">
                                                    <span className="afc-heading__title__text afc-heading__title__main">
                                                      Work 7,500 customers
                                                      around the world
                                                    </span>
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ee309ac"
                                      data-id="ee309ac"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="wow afc-animate-widget fadeInLeftSm elementor-element elementor-element-d6ebcb1 elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-afracode-button"
                                            data-id="d6ebcb1"
                                            data-element_type="widget"
                                            data-settings='{"afc_animation_name":"fadeInLeftSm","afc_transform":"none"}'
                                            data-widget_type="afracode-button.default"
                                            style={{
                                              visibility: "visible",
                                              "-webkit-animation-name":
                                                "_fadeInLeftSm",
                                              "animation-name": "_fadeInLeftSm",
                                            }}
                                          >
                                            <div className="elementor-widget-container">
                                              <a
                                                role="button"
                                                className="afc-button afc-button--sm afc-button--style-1 afc-button--outline-light"
                                                href="http://wp.afracode.com/mitra/personal-3/#"
                                                data-hover="Let's Work Together"
                                              >
                                                <span className="afc-button__text">
                                                  Let's Work Together
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> */}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Section;
