import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import HomePage from "./route/HomePage/HomePage";

export default function App() {
    return (
      <div>
          <Button variant='primary'>Button</Button>
            <HomePage />
            <Link to="/about">About</Link> 
      </div>
    );
  }