import {useState, useEffect} from 'react'
import * as contentAPI from '../../utilities/content-api';
import ContentCard from '../../components/ContentCard/ContentCard';

export default function WatchListPage({user}) {
  const [watchList, setWatchList] = useState([])

  useEffect( function() {
    async function getWatchList() {
      const allWatchListMovies = await contentAPI.getWatchList();
      console.log(allWatchListMovies)
      setWatchList(allWatchListMovies);
    }
    getWatchList();
  },[])

  const mappedWatchList = watchList.map((watchContent, idx) => 
    <ContentCard watchContent={watchContent} key={idx} />
  )

  return (
    <>
      <h1>{user.name}'s Watch List</h1>
      {mappedWatchList}
    </>
    );

  }