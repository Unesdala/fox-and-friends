import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from 'src/pages/HomePage/index';
import AboutPage from 'src/pages/AboutPage/AboutPage';
import AboutIconLink from 'src/components/AboutIconLink';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </div>
  );
}

export default App;
