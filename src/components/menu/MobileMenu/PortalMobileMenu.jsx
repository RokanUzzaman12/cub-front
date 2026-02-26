import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { portalList } from "../../../stores/portalStore";
import { fetchPortalsAndFillStore } from "../../../loaders/portalLoaders";

const PortalMobileMenu = () => {
  let portalData = useStore(portalList);
  useEffect(() => {
    fetchPortalsAndFillStore();
  }, [portalList]);
  return (
    <>
      <li className="has-droupdown">
        <a href="#" className="main">
          CUB Portals
        </a>
        <ul className="submenu mm-collapse">
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/notices">Notices</a>
          </li>
          <li>
            <a href="/activities">Activities</a>
          </li>
          <li>
            <a href="/alumni">Alumni</a>
          </li>
          {portalData?.data?.map((portal) => (
            <li key={portal.id}>
              <a href={portal.url}>{portal.title}</a>
            </li>
          ))}
        </ul>
      </li>
      <style>
        {`
  .navigation__menu--item__link {
    color: var(--rt-heading);
  }
   .navigation__menu--item.has-arrow::before {
    color: var(--rt-heading);
  }
   .navigation__menu--item:hover .navigation__menu--item__link {
    color: var(--rt-primary-2);
    transition: var(--transition);
  }
  
    .navigation__menu--item:hover
    .navigation__menu--item__link::before {
    content: "";
    width: 100%;
    height: 1px;
    background: var(--rt-primary-2);
    bottom: 40px;
    position: absolute;
  }
   .navigation__menu--item.has-arrow:hover::before {
    color: var(--rt-primary-2);
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
    color: #262626;
    font-size: 12px;
  }
  .navigation__menu--item.has-arrow:hover::before {
    content: "-";
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
    color: #262626;
    font-size: 12px;
    transition: var(--transition);
  }
  .navigation__menu--item ul.submenu li.has-arrow:hover::before,
  .navigation__menu--item .sub__style li.has-arrow:hover::before {
    content: "-";
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

        `}
      </style>
    </>
  );
};

export default PortalMobileMenu;
