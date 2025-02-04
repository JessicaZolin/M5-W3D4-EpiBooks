import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import books from './Books/fantasy.json';
import { useState } from 'react';


function App() {
  // We're using the useState hook to create a state variable named searchBook.
  // This variable will hold the value of the text that the user types into the search bar.
  // The initial value of the variable is an empty string.
  // 
  // The setSearchBook function is a function that can be used to update the value of the searchBook variable.
  // It takes a single argument, which is the new value of the searchBook variable.
  // 
  // The console.log statement is just here for debugging purposes. It will print the value of the searchBook variable to the console whenever the value of the variable changes.
  const [searchBook, setSearchBook] = useState('');
  console.log('The value of the searchBook variable is: ', searchBook);

  return (

    <div className="bg-dark text-white">

      <MyNav Brand="BOOKS ON A TREE" searchBook={searchBook} onchange={(event) => setSearchBook(event.target.value)} />
      <Welcome />
      <AllTheBooks book={books} searchBook={searchBook} />
      <MyFooter />

    </div >
  );
}

export default App;
