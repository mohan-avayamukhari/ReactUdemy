import './App.css';

function App() {
  let message = "hi there";
  if(Math.random() > 0.5){
    message = "bye";
  }
  return (
    <div>
      <h1>{message}</h1>
      <textarea placeholder=''></textarea>
    </div>
  );
}

export default App;
