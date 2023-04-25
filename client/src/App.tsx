import { useEffect, useState } from "react";
import { Person } from "./types";
import "./App.css";
import logo from "./assets/react.svg";

function App() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((res) => res.json())
      .then((people: Person[]) => setPeople(people));
  }, []);

  return (
    <div className="app">
      <div className="aboveCardContent">
        <h1>Other Content</h1>
      </div>
      <div className="flexgrid">
      {people.map((person, index) => (
        <div key={index} className="card">
          <img src={index % 2 == 0 ? logo : logo} alt="Avatar" />
          <div className="container">
            <h4>
              <b>{person.name}</b>
            </h4>
            <p>Age: {person.age}</p>
            <p>Favourite Food: {person.favourite_food ?? "Unknown"}</p>
          </div>
        </div>
      ))}
      </div>
      <div className="belowCardContent">
        <h1>Below Content</h1>
      </div>
    </div>
  );
}

export default App;