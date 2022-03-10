import React from "react";
import ImagesView from "./components/ImagesView";
export const ImagesContext = React.createContext([]);

function App() {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const updateImages = (data) => setImages(data);
  return (
    <div className="App">
      <ImagesContext.Provider
        value={{ loading, images, setLoading, updateImages }}
      >
        <ImagesView />
      </ImagesContext.Provider>
    </div>
  );
}

export default App;
