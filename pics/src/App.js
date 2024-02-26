import Searchbar from "./components/Searchbar"
import ImageList from "./components/ImageList";
import searchImages from "./services/api";

import { useState } from "react";
function App() {
  const [images, setImages] = useState([]);

  const getImages = (term) => {
    searchImages(term).then(res => setImages(res));
  }

  return (
    <div style={{margin:"10px"}}>
      <Searchbar getImages={getImages}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
