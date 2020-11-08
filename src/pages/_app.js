import Link from 'next/link';
import styles from './index.module.css';
export default function Index(){

    return(
    <div className={styles.container}> 
        <div className={styles.landing}>
            <h1 className={styles.heading}>Scrapio</h1>
        </div>
       
        <div className={styles.body}>
            <h1>About</h1>
            <p>Get information of amazon products throug a discord bot. We use web scrapping to get the data of the product searched and display the top 5 matched searches. Customers can also search a product by its Product Id.</p>
            <h1>How it works</h1>
            <p>Add our bot to your server. Then you can type !product "keyword" to get the search.</p>
            <Link href="https://github.com/rileyhawk1417/Amazon_Discord_Bot"><button >Get the Bot</button></Link>
            <h1>Made by</h1>
            <p><a href="https://github.com/criticic">Sagnik Mandal</a> | <a href="https://github.com/rileyhawk1417">Sean Riley Hawkins</a> | <a href="https://github.com/raibove/">Shweta Kale</a></p>
        </div>
    </div>
    )
}