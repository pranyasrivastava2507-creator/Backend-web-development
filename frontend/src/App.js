import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.error('Error fetching jokes:', error);
    });
  }, []);

  return (
    <div>
      <h1>Jokes</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke)=>{
          <div key={joke.id}>
            <h3>{joke.title}</h3>
          </div>
        })
      }
    </div>
  )
}

export default App;