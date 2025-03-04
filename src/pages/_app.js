import "@/styles/globals.css";
import Layout from "./loyout";


export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}
