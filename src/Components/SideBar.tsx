import { useState } from "react";

interface Props{
    onQuery: (query: string)=> void;
}

export default function MovieSearch(props: Props) {
  const [query, setQuery] = useState("");

 

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Sök efter en film 🎬</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Skriv in en filmtitel..."
          className="border p-2 rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={()=> props.onQuery(query)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sök
        </button>
      </div>
    </div>
  )
}
