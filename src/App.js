import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products/Products';  // Correct path to Products.js
import NavBar from './components/Products/nav';  // Correct path to nav.js

function App() {
  return (
    <div className="App">
      <div className="sticky-top">
        <NavBar />
      </div>
      <div className="container">
        <Products />
      </div>
    </div>
  );
}

export default App;
