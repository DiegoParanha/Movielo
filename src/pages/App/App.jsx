import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WatchedListPage from '../WatchedListPage/WatchedListPage';
import WatchListPage from '../WatchListPage/WatchListPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage'

export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/search" element={<SearchPage />}/>
              <Route path="/" element={<HomePage />}/>
              <Route path="/watchedlist" element={<WatchedListPage />} />
              <Route path="/watchlist" element={<WatchListPage />} />
            </Routes>

          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
