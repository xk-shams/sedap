import React from "react";
import Image from "next/image";
import styles from "@/styles/OrdersToday.module.css";

function OrderToday(props) {
  const { option } = props;
  return (
    <div className={styles.today}>
      <Image src={"/today.png"} width={24} height={24} alt="gg" />
      <select className={styles.todaySelect}>
        <option
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {option}
        </option>
        <option></option>
      </select>
    </div>
  );
}

export default OrderToday;
