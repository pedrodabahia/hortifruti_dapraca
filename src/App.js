import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from "./rotas";
function App() {
  return (
    <>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
    </>
  );
}

export default App;
