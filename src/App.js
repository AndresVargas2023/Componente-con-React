import logo from './logo.svg';
import './App.css';
import PersonCard from './Component/PersonCard';

function App() {
  return (
    
    <div className="person-card">
      <PersonCard
        firstName="John"
        lastName="Jane"
        age={45}
        hairColor="Black"
      />
      <PersonCard
        firstName="Smith"
        lastName="John"
        age={88}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Fillmore"
        lastName="Millard"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Smith"
        lastName="María"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
}

export default App;
