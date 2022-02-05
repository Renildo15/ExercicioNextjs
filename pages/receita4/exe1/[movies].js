import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Movies2(){

    const router = useRouter()
    const {movies} = router.query
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=8ba47b1d&s==${movies}`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (

        <ul>
            

            {data.Search.map( (m, i) => 
               <div>
                    <Link href={`/receita4/exe1/movieDetails/${m.imdbID}`}>
                      <a>{m.Title}</a>
                    </Link>
                    
                    <img width={100} src={m.Poster}></img>
               </div>
            )}

        </ul>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}

