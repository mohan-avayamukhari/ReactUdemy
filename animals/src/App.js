import { useState } from "react";
import "./App.css"
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [numberOfAnimals, setNumberOfAnimals] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    setNumberOfAnimals(numberOfAnimals+1);
  }

  console.log(getRandomAnimal());
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">
      {animals.map(animal => <AnimalShow animal={animal} key={animal}/>)}
      </div>
    </div>
  );
}

export default App;
