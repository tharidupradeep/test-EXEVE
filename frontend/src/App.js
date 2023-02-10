import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel slides={4} infinite={false} />
    </div>
  );
}

export default App;
