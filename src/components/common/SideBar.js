import { useState } from "react";
import "@/styles/SideBar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar(props) {
  return (
    <div>
      <Image
        className="side-bar-logo"
        src="/sedap-logo.png"
        width={171}
        height={50}
        alt="logo"
      />
      <p className="side-bar-p">Modern Admin Dashboard</p>
      <ul className="side-bar-ul">
        <li className="side-bar-li">
          <Link href="/orders" className="menu-link" passHref>
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Dashboard
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="/" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Order Detail
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="wallet" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Customer
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="#" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Analytics
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="#" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Reviews
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="#" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Foods
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="/orders" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Food Detail
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="#" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="gg" />
            Customer Detail
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="#" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Calendar
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="#" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Chat
          </Link>
        </li>
        <li className="side-bar-li">
          <Link href="#" className="menu-link">
            <Image src="/dashboardIcon.png" width={20} height={20} alt="icon" />
            Wallet
          </Link>
        </li>
      </ul>

      <div className="side-add">
        <div>
          <p>
            Please, organize your
            <br />
            menus through button
            <br />
            bellow!
          </p>
          <button className="side-btn">+Add Menus</button>
        </div>
        <Image
          src="/illustration.png"
          width={76.59}
          height={90.83}
          alt="shef"
        />
      </div>
      <div>
        <p className="side-text">
          Sedap Restaurant Admin Dashboard <br />© 2020 All Rights Reserved
        </p>
        <span className="side-text2">Made with ♥ by Peterdraw</span>
      </div>
    </div>
  );
}

export default Sidebar;
