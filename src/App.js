import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SuspensePage from './Pages/Suspense/Suspense';
import NotFound from './Pages/NotFound/NotFound';

const Home = lazy(() => import('./Pages/Home/Home'));
const History = lazy(() => import('./Pages/History/History'));
const Songs = lazy(() => import('./Pages/Songs/Songs'));

function App() {
  return (
    <Routes>            
      <Route exact path='/' element={<Suspense fallback={<SuspensePage />}> <Home /> </Suspense>}/>
      <Route path="/history" element={<Suspense fallback={<SuspensePage/>}><History /></Suspense>} />
      <Route path="/songs" element={<Suspense fallback={<SuspensePage/>}><Songs /></Suspense>} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
