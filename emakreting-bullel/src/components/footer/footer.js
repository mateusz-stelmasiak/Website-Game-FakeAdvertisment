import styles from "./footer.module.css";
import React, {useState} from "react";

export default function Footer() {
    const [links, setLinks] = useState([
            {link: '/test', title: 'test'},
            {link: '/test', title: 'test'},
            {link: '/test', title: 'test'},
            {link: '/test', title: 'test'}]
    );


    return (

        <footer className={styles.Footer}>

            <div className={styles.moreinfoContainer}>
                <b>SuperGry sp. z o.o </b><br/>
                ul. Przykładowa 7, <br/>
                62-453, Przykładowo
            </div>

            <div className={styles.hyperlinksContainer}>
                {links && Object.keys(links).map((link, index) => {
                    return (
                        <a key={"footer-link" + index} href={`${link}`}> {links[link].title} </a>
                    )
                })}

                {/*<a onClick={()=>dispatch(setPreferencesOpen(true))}> Ustawienia plików cookie </a>*/}
            </div>
        </footer>
    );
}
