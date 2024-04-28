import React,{useState} from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import ErrorBoundary from './ErrorBoundary'
import { GlobalProvider } from '../context/GlobalState'

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ErrorBoundary>
    <GlobalProvider>
      <button className="toggle-btn" onClick={toggleSidebar}>&#9776;</button>

      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <h2 className='exp-head'>Menu</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Transactions</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>

      <div className="content">
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
        </div>
        </div>
    </GlobalProvider>
    </ErrorBoundary>
  )
}

export default App