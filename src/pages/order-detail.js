import Head from "next/head";
import PageTitle from "@/components/common/PageTitle";
import styles from "@/styles/orderDetail.module.css";
export default function Orders() {
  return (
    <>
      <Head>
        <title>Orders Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                maxWidth: "1468px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <PageTitle
                title="Order ID #5552351"
                subtitle="Orders / Order Detaills"
              />
              <div>
                <button className={styles.cancelBtn}>Cancel Order</button>
                <button className={styles.onDelivery}>On Delivery</button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "start", gap: "40px" }}>
            <div className={styles.leftDiv}>
              <div className={styles.leftTop}></div>
              <div className={styles.leftBottom}></div>
            </div>
            <div className={styles.rightDiv}>
              <div className={styles.rightTop}></div>
              <div className={styles.rightBottom}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
