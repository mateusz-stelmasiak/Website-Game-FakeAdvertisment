import {connect} from "react-redux";
import Link from "antd";
import {setPreferencesOpen} from "../../redux/cookieActions";
import styles from "./footer.module.css";
import {useEffect, useState} from "react";

function Footer({dispatch,data}) {
    const [links,setLinks] = useState();

    useEffect(()=>{
        getLinks();
    },[])

    let getLinks = async()=>{
        setLinks(()=>{

        });
    }

    return (
        <footer className={styles.Footer}>
            <div className={styles.moreinfoContainer}>

            </div>
            <div className={styles.hyperlinksContainer}>
                {links && Object.keys(links).map((link,index) => {
                    return(
                        <Link key={"footer-link"+index} href={`/info/${link}`}> {links[link].title} </Link>
                    )
                })}

                <Link href={'/info/polityka-cookies'}> Polityka cookies </Link>
                <a onClick={()=>dispatch(setPreferencesOpen(true))}> Ustawienia plików cookie </a>
            </div>
        </footer>
    );
}

export default connect()(Footer);