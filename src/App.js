import { Routes, Route } from 'react-router-dom';
import NavDrawer from './components/nav_drawer';
import Models from './components/models';
import Reserve from './components/reserve';
import MyReservations from './components/my_reservations';
import AddMotorcycle from './components/add_motorcycle';
import DeleteMotorcycle from './components/delete_motorcycle';

function App() {
  return (
    <>
      <NavDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Models />} />
          <Route path="/models" element={<Models />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/add-motorcycle" element={<AddMotorcycle />} />
          <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
