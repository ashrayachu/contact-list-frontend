import './App.css';
import Contacts from './components/Contacts';
import EditContacts from './components/EditContacts';

import { Provider } from 'react-redux';
import store from './redux/store';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/edit/:id" element={<EditContacts />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
