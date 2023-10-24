import {useState,useEffect} from 'react'
import { Box ,Typography } from '@mui/material'
import Videos from './Videos'
import { FetchFromApi } from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {

  const { searchTerm } = useParams();
  const [videos , setVideos] = useState([]);

 useEffect(()=>{
     FetchFromApi(`search?part=snippet&q=${searchTerm}`)
     .then((data)=>{
           setVideos(data.items)
     })
 },[searchTerm]);

  return (
    <Box p={2} sx={{overflowY : 'auto',height:'90vh', flex: '2'}}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{
      color: 'white'
    }}>
      Search Results for: <span style={{
        color: '#F31503'
      }}>{searchTerm}</span>
    </Typography>

     <Videos
      Videos={videos}
     
     />

  </Box>
  )
}

export default SearchFeed