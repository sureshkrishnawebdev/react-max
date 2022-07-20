import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// styles
import './index.css';
// Components
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(	<BrowserRouter><App /></BrowserRouter>);
