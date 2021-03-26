//**************************************************
//Import Packages
import { motion } from "framer-motion";
//**************************************************

//**************************************************
//Import Styles
import style from "../styles/header.module.css";
//**************************************************

//**************************************************
//Header Component
export default function Header() {
    //Framer Motion Variants
    const hover = { y: -2 };
    const tap = { y: 2 };

    return (
        <header className={style.header}>
            <motion.h1 className={style.h1} whileHover={hover} whileTap={tap}>
                Drew P. Worden
            </motion.h1>
        </header>
    );
}
//**************************************************
