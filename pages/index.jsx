//**************************************************
//Import Packages
import Head from "next/head";
//**************************************************

//**************************************************
//Import Components
import Header from "../components/header";
//**************************************************

//**************************************************
//Import Styles
import style from "../styles/index.module.css";
//**************************************************

//**************************************************
//Index Component
export default function Index() {
    return (
      <>
        <Head>
          <title>Drew P. Worden</title>
        </Head>
        <Header/>
      </>
    )
}
//**************************************************
