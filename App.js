import {useState} from 'react';
import './App.css';
import Table1 from './components/Table';
import Modal from './components/Modal';


function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const rows = [
  {page: "", description: "this is the first page", status: "live"},
  {page: "", description: "this is the second page", status: "draft"},
  {page: "", description: "this is the third page", status: "error"}
  ];

  return (
    <div> 
    <p className='upper-window'> 
     {modalOpen && (<Modal />
     )}
    </p>
    <button className='btn' onClick={() => setModalOpen(true)}>
      add</button>
    <p className='App'>
      <Table1 rows={rows}/>
      </p>
    </div>
   
  );
}

export default App;
