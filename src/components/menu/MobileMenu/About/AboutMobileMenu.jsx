import AuthoritiesMobileMenu from "./AuthoritiesMobileMenu";
import MessageMobileMenu from "./MessageMobileMenu";

export default function AboutMobileMenu() {
  return (
    <>
      <li className="has-droupdown">
        <a href="#" className="main">
          About
        </a>
        <MessageMobileMenu />
        <AuthoritiesMobileMenu />
        <ul className="submenu mm-collapse">
          <li style={{ textAlign: "center", color: "#890c25" }}>About CUB</li>
          <li>
            <a href="/about">Brief History</a>
          </li>
          <li>
            <a href="/scholarship-info">Scholarship Information</a>
          </li>
        </ul>
      </li>

      <style>
        {`
              .header.v__2 {
    position: relative;
    /* box-shadow: var(--boxShadow); */
  }

  .header.v__2.fixed {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
  }
  @media screen and (max-width: 1200px) {
    .header.v__2 {
      padding: 15px 0;
    }
  }
  .header.v__2 .container-fluid {
    padding: 0 100px 0;
  }
  .header.v__2 .header__wrapper {
    margin-top: 0;
  }
  .header.v__2 .navigation__menu--item__link {
    color: var(--rt-heading);
  }
  .header.v__2 .navigation__menu--item.has-arrow::before {
    color: var(--rt-heading);
  }
  .header.v__2 .header__right--item .menu__trigger,
  .header.v__2 .header__right--item .lang__trigger,
  .header.v__2 .header__right--item .search__trigger {
    cursor: pointer;
    line-height: 1;
  }
  .header.v__2 .header__right--item .lang__trigger,
  .header.v__2 .header__right--item .search__trigger {
    font-size: 18px;
    color: var(--rt-heading);
  }
  .header.v__2 .navigation__menu--item:hover .navigation__menu--item__link {
    color: var(--rt-primary-2);
    transition: var(--transition);
  }
  .header.v__2
    .navigation__menu--item:hover
    .navigation__menu--item__link::before {
    content: "";
    width: 100%;
    height: 1px;
    background: var(--rt-primary-2);
    bottom: 40px;
    position: absolute;
  }
  .header.v__2 .navigation__menu--item.has-arrow:hover::before {
    color: var(--rt-primary-2);
  }
  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .header__right--item {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .header__right--item .menu__trigger,
  .header__right--item .lang__trigger,
  .header__right--item .search__trigger {
    cursor: pointer;
    line-height: 1;
  }
  .header__right--item .lang__trigger,
  .header__right--item .search__trigger {
    font-size: 18px;
    color: var(--rt-white);
  }
  .header__right--item .lang__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;
    min-width: 90px;
    max-width: 90px;
  }
  .header__right--item .lang__trigger .selected__lang {
    font-size: 14px;
  }
  .header__right--item .lang__trigger .translate__lang {
    position: absolute;
    top: 200%;
    background: var(--rt-white);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    box-shadow:
      0 0 0 1px rgba(0, 0, 0, 0.1),
      0 4px 11px rgba(0, 0, 0, 0.1);
  }
  .header__right--item .lang__trigger .translate__lang.show {
    opacity: 1;
    visibility: visible;
  }
  .header__right--item .lang__trigger .translate__lang ul {
    padding: 10px 15px;
    margin: 0;
    list-style: none;
  }
  .header__right--item .lang__trigger .translate__lang ul li {
    font-size: 14px;
    line-height: 1;
  }
  @media screen and (max-width: 1200px) {
    .header__menu {
      display: none;
    }
  }
  .navigation__menu ul {
    display: flex;
    max-width: max-content;
    gap: 60px;
    position: relative;
    padding: 0;
    margin: 0;
  }
  .navigation__menu--item {
    position: relative;
    margin: 0;
  }
  .navigation__menu--item:hover > a {
    color: red;
  }
  .navigation__menu--item__link {
    position: relative;
    /* font-size: 15px; */
    font-family: var(--font-primary);
    font-weight: 500;
    text-transform: uppercase;
    padding: 37px 0;
    display: block;
    color: var(--rt-heading);
  }
  .navigation__menu--item.has-child:hover ul.submenu {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }
  .navigation__menu--item.has-child:hover ul.submenu li.has-child:hover ul {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }
  .navigation__menu--item.has-arrow {
    position: relative;
  }
  .navigation__menu--item.has-arrow::before {
    position: absolute;
    content: "+";
    font-family: var(--fontawesome);
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    color: var(--rt-white);
    font-size: 12px;
    transition: var(--transition);
  }
  .navigation__menu--item.has-arrow:hover::before {
    content: "\f068";
    transition: var(--transition);
  }
  .navigation__menu--item ul.submenu,
  .navigation__menu--item .sub__style {
    position: absolute;
    top: 100%;
    min-width: 250px;
    background: var(--rt-white);
    z-index: 1024;
    display: inline-block;
    opacity: 0;
    padding: 30px 0;
    transform: scaleY(0);
    transform-origin: top center;
    visibility: hidden;
    transition: var(--transition);
    left: 0;
  }
  .navigation__menu--item ul.submenu li,
  .navigation__menu--item .sub__style li {
    position: relative;
    display: block;
    padding: 0 30px;
  }
  .navigation__menu--item ul.submenu li:hover > a,
  .navigation__menu--item .sub__style li:hover > a {
    color: var(--rt-primary-2);
  }
  .navigation__menu--item ul.submenu li:hover > a::before,
  .navigation__menu--item .sub__style li:hover > a::before {
    width: 80%;
  }
  .navigation__menu--item ul.submenu li:not(:last-child),
  .navigation__menu--item .sub__style li:not(:last-child) {
    margin: 0 0 15px;
  }
  .navigation__menu--item ul.submenu li.has-arrow,
  .navigation__menu--item .sub__style li.has-arrow {
    position: relative;
  }
  .navigation__menu--item ul.submenu li.has-arrow::before,
  .navigation__menu--item .sub__style li.has-arrow::before {
    position: absolute;
    content: "+";
    font-family: var(--fontawesome);
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    color: var(--rt-heading);
    font-size: 12px;
    transition: var(--transition);
  }
  .navigation__menu--item ul.submenu li.has-arrow:hover::before,
  .navigation__menu--item .sub__style li.has-arrow:hover::before {
    content: "\f068";
  }
  .navigation__menu--item ul.submenu li a,
  .navigation__menu--item .sub__style li a {
    padding: 0;
    font-family: var(--font-primary);
    /* font-size: 15px; */
    text-transform: capitalize;
    font-weight: 400;
    position: relative;
    color: var(--rt-heading);
  }
  .navigation__menu--item ul.submenu li a::before,
  .navigation__menu--item .sub__style li a::before {
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    position: absolute;
    content: "";
    background: var(--rt-primary-2);
    transition: var(--transition);
  }
  .navigation__menu--item ul.submenu li a:hover::before,
  .navigation__menu--item .sub__style li a:hover::before {
    width: 100%;
  }
  .navigation__menu--item ul.submenu li ul,
  .navigation__menu--item .sub__style li ul {
    top: 0;
    position: absolute;
    left: 100%;
    visibility: hidden;
    transform: scaleY(0);
    transform-origin: top center;
    opacity: 0;
    transition: var(--transition);
  }

  /* mega menu */
  .has-mega-menu {
    position: relative;
  }

  .mega-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    gap: 40px;
    padding: 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    visibility: hidden;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top center;
    transition: var(--transition);
    z-index: 1000;
    min-width: 100%;
  }

  .has-mega-menu:hover .mega-menu {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
  }

  .mega-column {
    flex: 1;
    min-width: 150px;
  }
  .mega-sub-column{
    display: flex;
    flex-direction: column;
  }

  .mega-column h4 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    color: var(--rt-primary);
  }

  .mega-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0
  }
  .mega-column ul li{
    padding: 0;
    margin: 0;
  }

  .mega-column ul li a {
    display: block;
    padding: 6px 0;
    color: var(--rt-heading);
    transition: color 0.3s ease;
    font-size: 16px;
  }

  .mega-column ul li a:hover {
    color: var(--rt-primary-2);
  }

  .header__sticky {
    position: relative;
    top: 0;
    display: block;
    width: 100%;
    box-shadow: none;
    background: transparent;
    z-index: 999;
    margin: auto;
    align-items: center;
    left: 0;
    border-radius: 0;
    transition: all 0.5s ease-in-out;
    top: 0;
    transform: translateY(0);
  }
  .header__sticky.fixed {
    position: fixed !important;
    box-shadow: 0px 7px 18px #1810100d;
    background: var(--rt-white);
    transition: none;
  }
  .header__sticky.fixed .header__logo--link img {
    filter: invert(100);
  }
  .header__sticky.fixed .header__right--item .menu__trigger img {
    filter: invert(100);
  }
  .header__sticky.fixed .navigation__menu--item__link {
    padding: 30px 0;
    color: var(--rt-heading);
  }
  .header__sticky.fixed .navigation__menu--item.has-arrow::before {
    color: var(--rt-heading);
  }
  .header__sticky.fixed
    .navigation__menu--item:hover
    .navigation__menu--item__link::before {
    bottom: 32px;
  }

  .header__sticky.back-hide-header {
    transform: translateY(-100%);
    transition: var(--transition);
  }

  .header.v__2.fixed .header__logo--link img {
    filter: invert(0);
  }
  .header.v__2.fixed .header__right--item .menu__trigger img {
    filter: invert(0);
  }
  .header.v__2.fixed .header__right--item .search__trigger {
    color: var(--rt-heading);
  }

  #side-bar .inner-main-wrapper-desk {
    display: block;
    margin-top: 30px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    #side-bar .inner-main-wrapper-desk {
      display: none;
    }
  }
  @media only screen and (max-width: 767px) {
    #side-bar .inner-main-wrapper-desk {
      display: none;
    }
  }
  #side-bar .mobile-menu-main {
    display: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    #side-bar .mobile-menu-main {
      display: block;
    }
  }
  @media only screen and (max-width: 767px) {
    #side-bar .mobile-menu-main {
      display: block;
    }
  }

  .mobile-menu-main nav ul {
    padding: 0 20px;
    display: block;
  }
  .mobile-menu-main nav ul li {
    margin: 0;
    padding: 0;
  }
  .mobile-menu-main nav ul li a.main {
    padding: 12px 0 17px 0;
    border-bottom: 1px solid #f3f3f3;
    cursor: pointer;
  }
  .mobile-menu-main nav ul li.has-droupdown {
    position: relative;
  }
  .mobile-menu-main nav ul li.has-droupdown ul {
    padding: 0;
    // padding-right: 30px
  }
  .mobile-menu-main nav ul li.has-droupdown ul a {
    padding: 10px 0;
    font-size: 16px;
    text-transform: capitalize;
  }
  .mobile-menu-main nav ul li.has-droupdown ul a.tag {
    font-weight: 700;
    margin-top: 15px;
    font-size: 18px;
    border-bottom: 2px solid var(--rt-primary);
    padding: 10px 0;
  }
  .mobile-menu-main nav ul li.has-droupdown ul li {
    margin: 7px 0 !important;
    border-bottom: 1px solid #f3f3f3;
  }
  .mobile-menu-main nav ul li.has-droupdown::after {
    position: absolute;
    content: "+";
    font-family: var(--fontawesome) !important;
    font-size: 16px;
    right: 0;
    font-weight: 400;
    top: 5px;
    padding: 8px 13px;
    color: #fff;
    background: var(--rt-primary-2) !important;
    pointer-events: none;
    cursor: pointer;
  }
  .mobile-menu-main nav ul li.has-droupdown.mm-active::after {
    content: "-";
    padding: 8px 15px;
  }
  .mobile-menu-main nav ul li.has-droupdown.third-lvl::after {
    font-size: 10px;
    padding: 3px 10px;
  }
  .mobile-menu-main nav ul li.has-droupdown.third-lvl ul {
    padding: 0 20px;
  }
  .mobile-menu-main nav ul li.has-droupdown.third-lvl ul li {
    margin: 10px 0 !important;
    position: relative;
    z-index: 1;
    transition: all 0.3s;
  }
  .mobile-menu-main nav ul li.has-droupdown.third-lvl ul li:hover {
    color: var(--rt-primary);
  }
  .mobile-menu-main nav ul li.has-droupdown.third-lvl ul li a {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
  .mobile-menu-main nav ul li a {
    display: block;
    color: var(--rt-body);
    /* font-size: 15px; */
  }
  .mobile-menu-main .social-wrapper-one {
    margin-top: 50px;
  }

  @media screen and (max-width: 1024px) {
    .side-bar .inner-main-wrapper-desk {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    .side-bar .mobile-menu {
      display: none !important;
    }
  }

  .sub-dropdown {
    position: relative !important;
    display: block !important;
  }
  .sub-dropdown .submenu.third-lvl {
    opacity: 0 !important;
    min-width: 185px !important;
    left: 100% !important;
    top: -13% !important;
    margin: 0;
    border-radius: 0 !important;
  }
  .sub-dropdown .submenu.third-lvl.base {
    display: none !important;
  }
  .sub-dropdown:hover .sub-menu-link {
    color: var(--rt-primary);
  }
  .sub-dropdown:hover .submenu.third-lvl.base {
    opacity: 1 !important;
    min-width: 185px !important;
    top: 0 !important;
    right: 3px;
    display: block !important;
  }
  .sub-dropdown:hover .submenu.third-lvl.base li {
    display: block;
  }
  .sub-dropdown:hover .submenu.third-lvl.base li a {
    display: block !important;
  }

  .mobile-menu-main .rts-social-style-one ul {
    padding-left: 0;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 15px;
    justify-content: center;
  }
  .mobile-menu-main .rts-social-style-one ul li {
    margin: 0;
  }
  .mobile-menu-main .rts-social-style-one ul li a {
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #f3f3f3;
    transition: 0.3s;
  }
  .mobile-menu-main .rts-social-style-one ul li:hover a {
    background: var(--rt-primary-2);
    color: #fff;
    border-color: var(--rt-primary-2);
    transform: translateY(-5px);
  }

  .side-bar {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: -100%;
    width: 380px;
    padding: 40px 35px;
    padding-top: 50px;
    height: 100%;
    display: block;
    background-color: white;
    backdrop-filter: blur(7px);
    z-index: 1900;
    transition: all 600ms ease;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow: visible;
  }
  @media only screen and (max-width: 575px) {
    .side-bar {
      width: 315px;
    }
  }
  .side-bar .inner-main-wrapper-desk .thumbnail {
    display: flex;
    justify-content: center;
  }
  .side-bar .inner-main-wrapper-desk .thumbnail img {
    width: 60%;
    margin: auto;
  }
  .side-bar .inner-main-wrapper-desk .inner-content {
    text-align: center;
    margin-top: 30px;
  }
  .side-bar .inner-main-wrapper-desk .inner-content p {
    max-width: 100%;
    text-align: center;
    margin: auto;
    font-size: 14px;
  }
  .side-bar .inner-main-wrapper-desk .inner-content .title {
    font-weight: 600;
  }
  .side-bar .inner-main-wrapper-desk .inner-content .footer {
    padding-top: 50px;
    margin-top: 40px;
    border-top: 1px solid #e8e8e8;
  }
  .side-bar .inner-main-wrapper-desk .inner-content .footer .title {
    font-weight: 500;
  }
  .side-bar .inner-main-wrapper-desk .inner-content .footer a.rts-btn {
    margin: auto;
  }
  .side-bar
    .inner-main-wrapper-desk
    .inner-content
    .contact-information--sidebar {
    margin-top: 50px;
  }
  .side-bar
    .inner-main-wrapper-desk
    .inner-content
    .contact-information--sidebar
    .title {
    margin-bottom: 20px;
    font-size: 24px;
  }
  .side-bar
    .inner-main-wrapper-desk
    .inner-content
    .contact-information--sidebar
    .single-info {
    margin: 15px 0;
  }
  .side-bar
    .inner-main-wrapper-desk
    .inner-content
    .contact-information--sidebar
    .single-info
    a:hover {
    color: var(--color-primary);
  }

  .side-bar.show {
    right: 0;
    overflow-y: auto;
  }

  .side-bar button {
    max-width: max-content;
    margin-right: auto;
    margin-left: -55px;
    margin-top: 0;
    position: absolute;
    border: 0;
  }
  .side-bar button i {
    color: #ffffff;
    height: 50px;
    width: 50px;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 14px;
    margin-top: -53px;
    font-size: 27px;
    background: var(--rt-primary-2);
  }

  #anywhere-home {
    cursor: url(../images/banner/shape/close.html), auto;
    background: #0e1013;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 500ms ease-in-out;
    pointer-events: none;
    z-index: 50;
  }

  #anywhere-home.bgshow {
    background: #0e1013;
    opacity: 70%;
    visibility: visible;
    pointer-events: visible;
    z-index: 999;
    top: 0;
  }

  .metismenu .mm-collapse:not(.mm-show) {
    display: none;
  }

  .index-three .side-bar .inner-main-wrapper-desk {
    display: none !important;
  }
  .index-three .side-bar .mobile-menu-main {
    display: block !important;
  }

  .offcanvase__banner--content {
    position: relative;
  }
  .offcanvase__banner--content img {
    width: 100%;
  }
  .offcanvase__banner--content .rts-theme-btn {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    font-size: 14px;
    padding: 8px 30px;
    border-radius: 4px;
  }

  .offcanvase__info {
    margin-top: 50px;
  }
  .offcanvase__info--content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
  }
  .offcanvase__info--content a {
    display: flex;
    gap: 10px;
    transition: var(--transition);
  }
  .offcanvase__info--content a:hover {
    color: var(--rt-secondary);
  }
  .offcanvase__info--content a span {
    color: var(--rt-secondary);
  }
  .offcanvase__info--content--social {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .offcanvase__info--content--social > p {
    text-align: left;
    margin: 0 !important;
  }
  .offcanvase__info--content--social .social__links {
    display: flex;
    gap: 10px;
  }

  .search-input-area {
    transition: all 500ms ease;
    visibility: hidden;
    transform: translateY(-100%);
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 57px 0;
    background: white;
    box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.46);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-input-area.show {
    visibility: visible;
    transform: inherit;
    opacity: 1;
  }

  .search-input-area .search-input-inner {
    display: flex;
    align-items: center;
    position: relative;
  }

  .search-input-area .search-input-inner .input-div {
    width: 80%;
    display: flex;
    align-items: center;
    margin: auto;
  }

  .search-input-area .search-input-inner .input-div input {
    background: #f7f7f7;
    border-radius: 5px;
    height: 55px;
    border: 1px solid transparent;
  }
  .search-input-area .search-input-inner .input-div input:focus {
    border: 1px solid var(--rt-primary);
  }

  .search-input-area .search-input-inner .input-div button {
    max-width: max-content;
    padding: 18px 21px;
    background: var(--rt-primary);
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    display: block;
    margin-left: -9px;
    border-radius: 0 5px 5px 0;
    font-size: var(--p-s);
  }

  .search-input-area .search-close-icon {
    cursor: pointer;
    position: absolute;
    right: 38px;
    top: 22px;
  }

  .search-input-area .search-close-icon i {
    position: relative;
    z-index: 1;
    color: var(--rt-primary);
    transition: 0.3s;
    font-size: 18px;
  }
  .search-input-area .search-close-icon i:hover {
    color: #f7f7f7;
  }
  .search-input-area .search-close-icon i:hover::after {
    background: var(--rt-primary);
  }

  .search-input-area .search-close-icon i::after {
    position: absolute;
    height: 45px;
    width: 45px;
    content: "";
    border-radius: 5px;
    background: #553cdf14;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: 0.3s;
  }

  #anywhere-home {
    cursor: url(../images/banner/shape/close.html), auto;
    background: #0e1013;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 500ms ease-in-out;
    pointer-events: none;
    z-index: 50;
  }

  #anywhere-home.bgshow {
    background: #0e1013;
    opacity: 70%;
    visibility: visible;
    pointer-events: visible;
    z-index: 999;
    top: 0;
  }

  .rts-footer.v_1 {
    background: var(--footer-bg);
    padding-bottom: 80px;
  }
  .rts-footer.v_2 {
    background: var(--light-white);
  }
  .rts-footer.v_2 .rts-footer-newsletter {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #242424;
    padding-bottom: 50px;
    margin-bottom: 60px;
  }
  .rts-footer.v_2.rts-footer-padding {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .rts-footer.v_2 .rts-newsletter-box-content {
    display: flex;
    align-items: center;
  }
  .rts-footer.v_2 .rts-newsletter-box-content h4 {
    color: var(--rt-white);
    margin-bottom: 0;
  }
  .rts-footer.v_2
    .rts-newsletter-box-content
    .newsletter-form
    form
    input[type="email"] {
    border-color: var(--rt-primary-2);
    border-radius: 0;
  }
  .rts-footer.v_2 .rts-newsletter-box-content .newsletter-form form button {
    color: var(--rt-secondary);
    border-radius: 0;
  }
  .rts-footer.v_2
    .rts-newsletter-box-content
    .newsletter-form
    form
    button:hover {
    color: var(--rt-white);
  }
  .rts-footer.v_2
    .rts-newsletter-box-content
    .newsletter-form
    form
    button.rts-nbg-btn::before {
    background: var(--rt-primary-2);
  }
  .rts-footer.rts-footer-padding {
    padding: 100px 0;
  }

  @media screen and (max-width: 992px) {
    .rts-footer-widget.ml--30 {
      margin-left: 0 !important;
    }
  }
  .rts-footer-widget h6 {
    text-decoration: underline;
    /* color: var(--rt-white); */
    margin-bottom: 25px;
    font-family: var(--font-primary);
  }
  .rts-footer-widget .rts-contact-link a {
    display: block;
    transition: var(--transition);
  }
  .rts-footer-widget .rts-contact-link a:not(:last-child) {
    margin-bottom: 15px;
  }
  .rts-footer-widget .rts-contact-link a:hover {
    color: var(--rt-primary-2);
  }
  .rts-footer-widget .rts-footer-menu ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .rts-footer-widget .rts-footer-menu ul li a {
    transition: var(--transition);
    color: var(--rt-heading);
  }
  .rts-footer-widget .rts-footer-menu ul li a:hover {
    color: var(--rt-primary-2);
  }
  .rts-footer-widget .rts-post-widget ul {
    margin: 0;
  }
  .rts-footer-widget .rts-post-widget ul .single-post {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0;
  }
  .rts-footer-widget .rts-post-widget ul .single-post:not(:last-child) {
    padding-bottom: 25px;
  }
  .rts-footer-widget .rts-post-widget ul .single-post .blog-thumb img {
    height: 80px;
    max-width: 80px;
    transform: scale(1);
    object-fit: cover;
  }
  .rts-footer-widget
    .rts-post-widget
    ul
    .single-post
    .post-content
    span.rt-date {
    display: block;
    margin-bottom: 5px;
  }
  .rts-footer-widget .rts-post-widget ul .single-post .post-content a {
    color: var(--rt-white);
    font-size: 18px;
    transition: var(--transition);
    font-family: var(--font-secondary);
  }
  .rts-footer-widget .rts-post-widget ul .single-post .post-content a:hover {
    color: var(--rt-primary-2);
  }

  .rts-footer-copy-right.v_1 {
    padding: 16px 0;
    background: var(--rt-primary);
    border-top: 1px solid #242424;
  }
  .rts-footer-copy-right.v_1 p {
    color: var(--rt-white);
  }
  .rts-footer-copy-right.v_1 a {
    color: var(--rt-white);
  }
  /*===== Footer CSS ======*/
  .footer {
    background: var(--footer-bg);
    padding: 100px 0;
  }
  .footer__widget--logo {
    margin-bottom: 50px;
  }
  .footer__widget--description {
    max-width: 320px;
    margin-left: 0;
  }
  .footer__widget--social .social {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 10px;
  }
  .footer__widget--social .social li a {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    border: 1px solid var(--rt-white);
    background: transparent;
    transition: var(--transition);
  }
  .footer__widget--social .social li a i {
    color: var(--rt-white);
  }
  .footer__widget--social .social li a:hover {
    background: var(--rt-primary-1);
    border-color: var(--rt-primary-1);
  }
  .footer__widget--title {
    font-size: 20px;
    font-weight: 500;
    font-family: var(--font-primary);
    color: var(--rt-white);
    margin-bottom: 40px;
  }
  .footer__widget--menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .footer__widget--menu ul li {
    margin-top: 0;
    margin-bottom: 0;
  }
  .footer__widget--menu ul li:not(:last-child) {
    margin-bottom: 15px;
  }
  .footer__widget--menu ul li a {
    transition: var(--transition);
  }
  .footer__widget--menu ul li a:hover {
    color: var(--rt-hover);
  }
  .footer__widget--button {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .footer__widget--button .cta__button {
    padding: 14px 30px;
    text-align: center;
    border: 1px solid var(--rt-white);
    color: var(--rt-white);
    border-radius: 30px;
    transition: var(--transition);
    text-transform: capitalize;
  }
  .footer__widget--button .cta__button:hover,
  .footer__widget--button .cta__button.active {
    background: var(--rt-primary-1);
    border-color: var(--rt-primary-1);
  }

  /*======== Footer Copyright =========*/
  .copyright {
    border-top: 1px solid var(--copyright-border);
    background: var(--footer-bg);
  }
  .copyright__wrapper {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copyright__wrapper p a {
    color: var(--rt-primary-1);
  }

  .progress-wrap {
    position: fixed;
    right: 30px;
    bottom: 30px;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    z-index: 10000;
    opacity: 1;
    visibility: hidden;
    transform: translateY(15px);
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .progress-wrap.active-progress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    box-shadow: 0px 1px 5px 10px rgba(0, 0, 0, 0.041);
  }

  .progress-wrap::after {
    position: absolute;
    font-family: var(--fontawesome);
    content: "\f077";
    text-align: center;
    line-height: 46px;
    font-size: 20px;
    color: var(--rt-primary);
    left: 0;
    top: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    z-index: 1;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    border: 0px solid var(--rt-primary);
    box-shadow: none;
    border-radius: 50% !important;
    border-radius: 5px;
  }

  .progress-wrap:hover::after {
    opacity: 1;
    content: "\f077";
    border: 0px solid var(--rt-primary);
  }

  .progress-wrap::before {
    position: absolute;
    font-family: "unicons";
    content: "\f077";
    text-align: center;
    line-height: 46px;
    font-size: 24px;
    opacity: 0;
    background: var(--rt-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    left: 0;
    top: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    z-index: 2;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .progress-wrap:hover::before {
    opacity: 0;
  }

  .progress-wrap svg path {
    fill: none;
  }

  .progress-wrap svg {
    color: var(--rt-primary);
    border-radius: 50%;
    background: #fff;
  }

  .progress-wrap svg.progress-circle path {
    stroke: var(--rt-primary);
    stroke-width: 0px;
    box-sizing: border-box;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .home-blue .progress-wrap svg.progress-circle path {
    stroke: var(--rt-primary-2);
  }
  .home-blue .progress-wrap::after {
    border-color: var(--rt-primary-2);
    box-shadow: 0px 3px 20px 6px #0742e952;
    color: var(--rt-primary-2);
  }

  .rts-contact-info .contact-information .single-contact {
    background: #f6f6f6;
    text-align: center;
    padding: 50px;
  }
  @media screen and (max-width: 1200px) {
    .rts-contact-info .contact-information .single-contact {
      padding: 25px;
    }
  }
  .rts-contact-info .contact-information .single-contact__single .icon {
    margin-bottom: 30px;
  }
  .rts-contact-info .contact-information .single-contact__single .icon i {
    font-size: 64px;
    color: var(--rt-primary-1);
  }
  .rts-contact-info .contact-information .single-contact__single p {
    color: var(--rt-secondary);
    font-weight: 500;
    line-height: 30px;
  }
  .rts-contact-info .contact-information .single-contact__single p.rt-regular {
    font-weight: 400 !important;
  }
  .rts-contact-info .contact-information .single-contact__single .method {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .rts-contact-info .contact-information .single-contact__single .method a {
    font-size: 20px;
    font-weight: 500;
    color: var(--rt-secondary);
  }

  .contact-method__single {
    position: relative;
  }
  .contact-method__single::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .contact-method__single .contact-img-bg img {
    min-height: 370px;
    max-height: 370px;
    width: 100%;
    object-fit: cover;
  }
  .contact-method__single .contact-text {
    padding: 60px 50px;
    position: absolute;
    top: 0;
    min-height: 100%;
    width: 100%;
    color: var(--rt-white);
  }
  .contact-method__single .contact-text h3.contact-title {
    color: var(--rt-white);
    margin-bottom: 20px;
  }
  .contact-method__single .contact-text .description {
    color: var(--rt-white);
    font-size: 20px;
    font-weight: 500;
  }
  .contact-method__single .contact-text .contact-link {
    position: absolute;
    bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .contact-method__single .contact-text .contact-link a {
    color: var(--rt-white);
    display: block;
    font-size: 20px;
    font-weight: 500;
  }

  .contact-map {
    height: 470px;
    filter: grayscale(1);
  }

        `}
      </style>
    </>
  );
}
