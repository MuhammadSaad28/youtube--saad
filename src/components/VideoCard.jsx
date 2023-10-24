import React from 'react'
import { Link } from 'react-router-dom'
import { Typography , Card , CardContent , CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'


const VideoCard = ({ video : {id : {videoId} , snippet}}) => {
   
  return (
    <Card sx={{
        width: {sm: '300px' ,  md: '300px' , xs: '100%'},
        boxShadow: 'none',
        borderRadius: 0,
        ml:   { xs: '-7px' , sm: '-33px' },
        mr:  { xs: '7px' , sm: '30px'}
        
    }}> 
      <Link to={`/video/${videoId}`} >

<CardMedia 
image={snippet?.thumbnails?.high?.url}
alt={snippet?.title}
sx={{
    width: 358 , height: 180
}}

/>

      </Link>

<CardContent
sx={{
    background:'#1e1e1e',
    height: '106px'
}}
>
<Link to={`/video/${videoId}`} >
    <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
        {snippet?.title.slice(0,60)}
    </Typography>
</Link>

<Link to={`/channel/${snippet?.channelId}`} >
    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
        {snippet?.channelTitle}
        <CheckCircle sx={{
            fontSize: 12 , color: 'gray' , ml: '5px'
        }}/>
    </Typography>
</Link>

</CardContent>

    </Card>
  )
}

export default VideoCard