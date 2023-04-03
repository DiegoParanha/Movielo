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
import ContentList from '../ContentList/ContentList';
// import SearchPageList from '../../components/SearchPageList/SearchPageList';
import ContentDetail from '../../components/ContentDetail/ContentDetail';
import UpdateCommentForm from '../../components/UpdateCommentForm/UpdateCommentForm';

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
              <Route path="/watchedlist" element={<WatchedListPage user={user} />} />
              <Route path="/watchlist" element={<WatchListPage user={user} />} />
              <Route path="/contentlist" element={<ContentList />} />
              <Route path="/content/:id" element={<ContentDetail user={user}/>} />
              <Route path="/content/:id/edit" element={<UpdateCommentForm />}  />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
        }
        <footer className='footer'>All Rights Reserved, &copy; 2023 Movielo &nbsp;</footer>
    </main>
  );
}
