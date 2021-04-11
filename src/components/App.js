// create your App component here
import React, {useState, useEffect} from 'react';

function App() {
    const [image, setImage] = useState(null);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setImage(data.message);
        });
    }, []);
  
    // if the data hasn't been loaded, show a loading indicator
    if (!image) return <p>Loading...</p>
  
    return <img src={image} alt="A Random Dog"/>
  } 

  export default App;