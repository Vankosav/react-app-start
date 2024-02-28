import logo from './logo.svg';
import './App.css';

const heading = <h1> React is cool! </h1>;

const student = {
  firstName: 'ivana',
  lastName: 'nedeljkov'
};

const paragraph = 'This is a paragraph!';

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
 
function App() {
  return (
   
    <div className="App">
      {heading}
      
      <h4>Hi, { capitalizeFirstLetter(student.firstName) } { capitalizeFirstLetter(student.lastName) }!</h4>

      <p>{paragraph} </p>

      <div className='Logo'>
        <img src={logo} alt='React logo' />
      </div>
    </div>
  );
}

export default App;
