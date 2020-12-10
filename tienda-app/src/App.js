import './App.css';
import Nav from './components/global/nav';
import logo from './assets/logo.png';
import Modal from './components/global/modal';
import Item from './components/global/item';

function App() {
  return (
    <>
      <Nav />
      <Modal>
        <Item />    
      </Modal>
      
    </>
  );
}

export default App;
