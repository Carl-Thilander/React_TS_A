import {
  useQuery
} from '@tanstack/react-query'
import { getMovie } from '../Api'




export default function MoviePage() {
    
    const { isPending, error, data } = useQuery({
      queryKey: ['movie', "123"],
      queryFn: () => getMovie("123")
    })
  
    if (isPending) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <div>
        <h1>{data.Title}</h1>
        <h2>{data.Genre}</h2>
        <p>{data.Plot}</p>
        <img src={data.Poster}/>
      </div>
    )
  }