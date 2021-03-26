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
            <Header />
            <main className={style.main}>
                <section className={style.section1}>
                    <img
                        className={style.sideShot}
                        src="/images/side.jpg"
                        alt="Drew's half shot."
                    />
                    <p className={style.section1Par}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti cumque similique neque, adipisci maxime eum
                        necessitatibus perferendis dolor quos excepturi, illo
                        saepe modi consequuntur minima ea sed, non quidem
                        provident unde! Nulla, nemo! Reiciendis totam
                        dignissimos excepturi quas! Consequatur sed, reiciendis
                        laborum impedit similique beatae? Facere corporis iusto
                        unde recusandae.
                    </p>
                </section>
            </main>
        </>
    );
}
//**************************************************
