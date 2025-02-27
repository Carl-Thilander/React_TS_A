import { useState } from "react";

interface Props{
    onQuery: (query: string)=> void;
}




export default function MovieSearch(props: Props) {
  const [query, setQuery] = useState("");

 

  return (
    <div>
      <h1>Search for your favorite film🎬</h1>
      <div>
        <input
          type="text"
          placeholder="Disney...Action..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={()=> props.onQuery(query)}>
          Sök
        </button>
      </div>
    </div>
  )
}
