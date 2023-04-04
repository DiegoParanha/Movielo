import {useState, useEffect} from 'react'
import * as contentAPI from '../../utilities/content-api';
import ContentCard from '../../components/ContentCard/ContentCard';

export default function WatchedListPage({user}) {
  const [watchedList, setWatchedList] = useState([])

  useEffect(function() {
    async function getWatchedList() {
      const allWatchedListMovies = await contentAPI.getWatchedList();
      setWatchedList(allWatchedListMovies);
    }
    getWatchedList();
  },[])

  const mappedWatchedList = watchedList.map((watchContent, idx) => 
    <ContentCard watchContent={watchContent} key={idx} />
  )

  return (
    <>
      <h1>{user.name}'s Watched List</h1>
      <div className="section">{mappedWatchedList}</div>
    </>
  );
}
