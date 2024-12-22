import './App.css';

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          fetch('/test')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error', error));
        }}
      ></button>
    </div>
  );
}

export default App;
