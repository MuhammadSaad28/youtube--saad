import React from 'react'
import { Stack , Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


const Videos = ({Videos , direction }) => {

  if (!Videos?.length){
    return 'Loading...'; // Return early if Videos is null or not an array
  }
    
  return (
    <Stack direction= { direction || "row"} flexWrap="wrap" justifyContent="center" gap={2} sx={{
      ml: { xs: '7px' , md: '-42.5px' }
    }} >
       
        {
            Videos.map((item,index) => (
                <Box key={index}>

                    {item.id.videoId && <VideoCard  video={item}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}/>}

                </Box>
            ))
        }

    </Stack>
  )
}

export default Videos