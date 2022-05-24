import './App.css';
import Navbar from './components/Navbar';
import TransactionModal from './components/TransactionModal';
import TransactionList from './components/TransactionList';
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <TransactionModal />
        <TransactionList />
      </>
    </Provider>
  );
}

export default App;
