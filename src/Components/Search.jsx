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
    axios
      .get(`https://dog.ceo/api/breed/${search.toLowerCase()}/images/random`)
      .then(res => {
        console.log(res);
        setDog({
          message: res.data.message,
          type: res.data.status
        });
      })
      .catch(error => {
        console.log("error:", error.message);
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
          <div className="input-group w-100 mb-2 p-2">
            <input type="text" className="form-control" placeholder="Please enter dog specie..." onChange={handleChange} value={search} />
          </div>
          <div className="input-group w-25 mb-2 p-2">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
      </form>
      {dog.type === "error" && (
        <div className="error">
          <p>Paieška negalima... </p>
          <p>Bandykite įvesti kitą veislę</p>
        </div>
      )}
      {dog.type === "success" && (
        <div>
          <Dog specie={dog.message} />
        </div>
      )}
    </div>
  );
}

export default Search;
