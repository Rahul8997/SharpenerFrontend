import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ExpenseContext from './Components/Store/ExpenseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpenseContext><BrowserRouter><App /></BrowserRouter></ExpenseContext>);