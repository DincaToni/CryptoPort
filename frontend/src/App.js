import './App.css';
import Navbar from './components/Navbar';
import TransactionList from './components/TransactionList';
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <TransactionList />
      </>
    </Provider>
  );
}

export default App;
