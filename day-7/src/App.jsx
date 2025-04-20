import "./App.css";
import Card from "./components/Card";
import { URL } from "./constants";

function App() {
  return (
    <div className='grid grid-cols-3'>
      {URL.map((image, index) => (
        <div key={index} className=''>
          <Card title={image.title} imgUrl={image.imageUrl} />
        </div>
      ))}
    </div>
  );
}

export default App;
