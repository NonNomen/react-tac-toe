import './App.css';

function App() {
  return (
    <div className="App">
      <h1>sdjafjfjfaj</h1>
      <button
        onClick={() => {
          fetch('/api/test')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error', error));
        }}
      ></button>
    </div>
  );
}

export default App;
