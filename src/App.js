import img1 from './hello.jpeg';
import './main.css';
export default function App() {
  return (
    <div className="header_title">
      <h1>React App webpack</h1>
      <div>
        <img src={img1} />
      </div>
    </div>
  );
}
