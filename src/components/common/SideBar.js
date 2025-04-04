import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/SideBar.module.css";

const userData = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    image: "/dashboardIcon.png",
  },
  {
    id: 2,
    name: "Order List",
    link: "/orders",
    image: "/icon4.png",
  },
  {
    id: 3,
    name: "Order Detail",
    link: "/order-detail",
    image: "/icon2.png",
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className={styles.sidebarContainer}>
      <Image
        className={styles.sideBarLogo}
        src="/sedap-logo.png"
        width={171}
        height={50}
        alt="logo"
      />
      <p className={styles.sideBarP}>Modern Admin Dashboard</p>

      <ul className={styles.sideBarUl}>
        {userData.map((user) => {
          const isActive = pathname === user.link;

          return (
            <li key={user.id} className={styles.user}>
              <Link href={user.link} passHref legacyBehavior>
                <a
                  className={`${styles.menuLink} ${
                    isActive ? styles.activeLink : ""
                  }`}
                >
                  <Image src={user.image} width={20} height={20} alt="icon" />
                  {user.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.sideAdd}>
        <div>
          <p>
            Please, organize your
            <br />
            menus through button
            <br />
            below!
          </p>
          <button className={styles.sideBtn}>+ Add Menus</button>
        </div>
        <Image
          src="/illustration.png"
          width={76.59}
          height={90.83}
          alt="chef"
        />
      </div>

      <div>
        <p className={styles.sideText}>
          Sedap Restaurant Admin Dashboard <br />© 2020 All Rights Reserved
        </p>
        <span className={styles.sideText2}>Made with ♥ by Peterdraw</span>
      </div>
    </div>
  );
}

export default Sidebar;
