import React, {useState, useEffect} from 'react';
import api from './services/api'
import Header from './components/Header'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await api.get(`/characters`)

      console.log(result.data)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header/>
    </div>
  );
}

export default App;
