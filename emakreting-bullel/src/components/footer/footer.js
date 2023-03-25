// import {connect} from "react-redux";
// import {setPreferencesOpen} from "../../redux/cookieActions";
import styles from "./footer.module.css";
import {useEffect, useState} from "react";

export default function Footer() {
    const [links, setLinks] = useState();

    useEffect(() => {
        getLinks();
    }, [])

    let getLinks = async () => {
        setLinks(() => {
            return [
                {link: '/test', title: 'test'}
            ]
        });
    }

    return (
        <footer className={styles.Footer}>
            <div className={styles.moreinfoContainer}>

            </div>
            <div className={styles.hyperlinksContainer}>
                {links && Object.keys(links).map((link, index) => {
                    return (
                        <a key={"footer-link" + index} href={`/info/${link}`}> {links[link].title} </a>
                    )
                })}

                <a href={'/info/polityka-cookies'}> Polityka cookies </a>
                {/*<a onClick={()=>dispatch(setPreferencesOpen(true))}> Ustawienia plików cookie </a>*/}
            </div>
        </footer>
    );
}
