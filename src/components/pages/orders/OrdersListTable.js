import React from "react";
import styles from "../../../styles/OrdersListTable.module.css";
import { data } from "@/components/data";
import { useState } from "react";
import Image from "next/image";

function OrdersListTable() {
  const [users, setUsers] = useState(data);
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.head}>
            <th className={styles.first1}>Order ID</th>
            <th className={styles.first}>Date</th>
            <th className={styles.first}>Customer Name</th>
            <th className={styles.first}>Location</th>
            <th className={styles.first}>Amount</th>
            <th className={styles.first}>Status Order</th>
            <th className={styles.first2}></th>
          </tr>
        </thead>
        <tbody>
          <ForMap users={users} />
        </tbody>
      </table>
      <div>
        <p className={styles.end}>
          Showing {data.length} from {data.length} data
        </p>
      </div>
    </div>
  );
}

function ForMap(props) {
  const { users } = props;
  return users.map((item) => (
    <>
      <tr>
        <th className={styles.bodyTh}>{item.num}</th>
        <th className={styles.bodyTh}>{item.time}</th>
        <th className={styles.bodyTh}>{item.name}</th>
        <th className={styles.bodyTh}>{item.address}</th>
        <th className={styles.bodyTh}>{item.price}$</th>
        <th className={styles.bodyTh}>
          <span className="bodyThOrder">{item.order}</span>
        </th>
        <th>
          <button className={styles.bodyMoreBtn}>
            <Image src="/more.png" width={24} height={24} alt="gg" />
          </button>
        </th>
      </tr>
    </>
  ));
}

export default OrdersListTable;
