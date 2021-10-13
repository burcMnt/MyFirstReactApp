import './App.css';
import Hobilerim from './Hobilerim';
import TiklamaOyunu from './TiklamaOyunu';

function App() {
  return <div>
    <h1>İlk React Uygulamam</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur.
    </p>
    
    <Hobilerim/>
    <TiklamaOyunu deger={10}/>
    <TiklamaOyunu deger={20}/>
  </div>;
}

export default App;
