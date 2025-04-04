import React from "react";
import styles from "@/styles/OrdersListTable.module.css";
import { data } from "@/components/data";
import { useState } from "react";
import Image from "next/image";

function OrdersListTable() {
  const [users, setUsers] = useState(data);
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="head">
            <th className="first1 th">Order ID</th>
            <th className="first th">Date</th>
            <th className="first th">Customer Name</th>
            <th className="first th">Location</th>
            <th className="first th">Amount</th>
            <th className="first th">Status Order</th>
            <th className="first2 th"></th>
          </tr>
        </thead>
        <tbody>
          <ForMap users={users} />
        </tbody>
      </table>
      <div>
        <p className="end">
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
        <th className="bodyTh">{item.num}</th>
        <th className="bodyTh">{item.time}</th>
        <th className="bodyTh">{item.name}</th>
        <th className="bodyTh">{item.address}</th>
        <th className="bodyTh">{item.price}$</th>
        <th className="bodyTh">
          <span className="bodyThOrder">{item.order}</span>
        </th>
        <th>
          <button className="bodyMoreBtn">
            <Image src="/more.png" width={24} height={24} alt="gg" />
          </button>
        </th>
      </tr>
    </>
  ));
}

export default OrdersListTable;
