import React from 'react'
import { Link } from 'react-router-dom'
import { Typography , Card , CardContent , CardMedia , Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({channelDetail,mt}) => {
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '326px',
      margin:'auto',
      width: { xs: '356px' , md: '300px' },
      mt,
      
    }}>

      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        
        <CardContent sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          color: '#fff'
        }}>

          <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '1px solid #e3e3e3'
          }}
          />

          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{
            fontSize: 14 , color: 'gray' , ml: '5px'
        }}/>
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}

        </CardContent>

      </Link>

    </Box>
  )
}

export default ChannelCard