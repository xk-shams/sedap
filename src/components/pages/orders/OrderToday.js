import React from "react";
import Image from "next/image";
import styles from "@/styles/OrdersToday.module.css";

function OrderToday(props) {
  const { option } = props;
  return (
    <div className="today">
      <Image src={"/today.png"} width={24} height={24} alt="gg" />
      <select className="today-select">
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
