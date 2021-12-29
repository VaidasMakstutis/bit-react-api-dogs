import Dog from "./Dog";
import { useState } from "react";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [dog, setDog] = useState({
    message: "",
    type: ""
  });

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://dog.ceo/api/breed/${search.toLowerCase()}/images/random`)
      .then(res => {
        console.log(res);
        setDog({
          message: res.data.message,
          type: res.data.status
        });
      })
      .catch(error => {
        console.log("betkas", error.message);
        setDog({
          message: "Šuns veislė nerasta...",
          type: "error"
        });
      });
  };

  return (
    <div>
      <h2>Search dogs</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 w-50 p-3">
          <input type="text" className="form-control" placeholder="Please enter dog specie" onChange={handleChange} value={search} />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      <Dog specie={dog.message} />
    </div>
  );
}

export default Search;
