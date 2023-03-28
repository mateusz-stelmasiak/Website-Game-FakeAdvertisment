import styles from "./footer.module.css";
import React, {useState} from "react";

export default function Footer() {
    const [links, setLinks] = useState([
            {link: '/#about', title: 'About'},
            {link: '/#reviews', title: 'Reviews'},
            {link: '/#contact', title: 'Contact'}
        ]
    );


    return (

        <footer className={styles.Footer}>

            <div className={styles.moreinfoContainer}>
                <b>SuperGry sp. z o.o </b><br/>
                ul. Przykładowa 7, <br/>
                62-453, Przykładowo
            </div>

            <div className={styles.hyperlinksContainer}>
                {links.map((link, index) => {

                    return (
                        <a key={"footer-link" + index} href={`${link.link}`}> {link.title} </a>
                    )
                })}

                {/*<a onClick={()=>dispatch(setPreferencesOpen(true))}> Ustawienia plików cookie </a>*/}
            </div>
        </footer>
    );
}
