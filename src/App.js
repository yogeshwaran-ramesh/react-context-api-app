import React from "react";
const ImagesContext = React.createContext([]);

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

function ImagesView() {
  const { loading, images, updateImages, setLoading } =
    React.useContext(ImagesContext);

  const fetchImages = async () => {
    setLoading(true);
    fetch("https://picsum.photos/v2/list?page=1&limit=9")
      .then((response) => response.json())
      .then((responseJson) => {
        updateImages(responseJson);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="flex-center flex-column">
      <h1>Context API</h1>
      <button className="btn" onClick={() => fetchImages()}>
        Fetch Images
      </button>
      {loading && <h1>loading...</h1>}
      <div className="flex-center image-wrapper">
        {images.map(({ download_url, id, author }) => (
          <img className="image" key={id} src={download_url} alt={author} />
        ))}
      </div>
    </div>
  );
}

export default App;
