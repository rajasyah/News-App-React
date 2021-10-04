import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import RooNews from "./components/RooNews";

const API = "25b7a54b0d48440bb04708972c8ad164";

function App() {
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${term}&from=2021-10-04&sortBy=popularity&apiKey=${API}`
      )
      .then((res) => res.data)
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Navbar search={(text) => setTerm(text)} />

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Seach News...</h1>
      ) : (
        <div className="container grid grid-cols-3 gap-4 mt-4 mx-auto">
          {articles.map((article, i) => (
            <RooNews key={i} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
