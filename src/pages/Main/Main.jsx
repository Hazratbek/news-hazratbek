import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'
import styles from './styles.module.css'

const Main = () => {
    const [news, setNews] = useState([])

    useEffect(() =>{
        const fetchNews = async () => {
            try {
                const respons = await getNews()
                setNews(respons.news);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews()
    },[])

    return (
        <main className={styles.main}>
            { news.length > 0 ? <NewsBanner item={news[0]} />: null}

            <NewsList news={news} />
        </main>
    )
}

export default Main