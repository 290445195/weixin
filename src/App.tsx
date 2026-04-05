import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Network from './pages/network';
import Timeline from './pages/timeline';
import Site from './pages/site';
import Forum from './pages/forum';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="network" element={<Network />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="site" element={<Site />} />
          <Route path="forum" element={<Forum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;