import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import BottomAppBar from './components/bar/BottomBar';
import Home from './pages/HomePage';
import Search from './pages/SearchPage';
import NotFound from './pages/NotFoundPage';
import CharactersFromEpisode from './pages/CharactersFromEpisodePage';
import Actors from './pages/ActorsPage';
import DesktopBar from './components/bar/DesktopBar';

function App() {

    return (
        <>
            <Router>
                <DesktopBar/>
                <BottomAppBar />
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />

                    <Route path='/home' element={<Home />} />

                    <Route path='/search' element={<Search />}>
                        <Route path=':filterEpisode' element={<Search />} />
                    </Route>

                    {/* //filter characters from episode by its episode number*/}
                    <Route path='/characters/:episodeId' element={<CharactersFromEpisode />} />

                    <Route path='/actors' element={<Actors />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
