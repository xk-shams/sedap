import React from "react";
import Image from "next/image";
import styles from "@/styles/OrdersStatus.module.css";
function OrderStatus(props) {
  const { option } = props;

  return (
    <div className="status">
      <Image src="/status.png" width={24} height={24} alt="gg" />
      <select className="status-select">
        <option
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className="option"
        >
          {option}
        </option>
        <option className="option"></option>
      </select>
    </div>
  );
}

export default OrderStatus;
