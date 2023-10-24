import {useState,useEffect} from 'react'
import { Box , Stack , Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { FetchFromApi } from '../utils/FetchFromApi'


const Feed = () => {

  const [selected , setSelected] = useState('Recommended')
  const [videos , setVideos] = useState([]);

 useEffect(()=>{
     FetchFromApi(`search?part=snippet&q=${selected}`)
     .then((data)=>{
           setVideos(data.items)
     })
 },[selected]);

  return (
    <Stack sx={{flexDirection: {sx: "column" , md: "row"}}}>
      <Box sx={{height: { sx: 'auto' , md: '92vh'},borderRight:'1px solid #3d3d3d' , px:{sx:0 , md:2}}}>

        <Sidebar 
         selected = {selected}
         setSelected = {setSelected}
        />
      </Box>

      <Box p={2} sx={{overflowY : 'auto',height:'90vh', flex: '2'}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color: 'white'
        }}>
          {selected} <span style={{
            color: '#F31503'
          }}>Videos</span>
        </Typography>

         <Videos
          Videos={videos}
         />

      </Box>
      </Stack>
  )
}

export default Feed