import { useEffect , useState } from "react"
import { Link , useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography , Box , Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import Videos from "./Videos"
import { FetchFromApi } from "../utils/FetchFromApi"

const VideoDetail = () => {

  const [video , setVideo] = useState(null)
  const [vid , setVid] = useState(null)

  const { id } = useParams();



  useEffect(()=>{
     FetchFromApi(`videos?part=snippet,statistics&id=${id}`)
     .then((data)=> setVideo(data.items[0]))

     FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
     .then((data) => setVid(data.items))
  },[id])

  if(!video?.snippet) {return 'Loading...'}

  const { snippet: { title , channelId , channelTitle } , statistics : { viewCount , likeCount } } = video

  return (
    <Box minHeight='95vh'>

      <Stack direction={{xs:'column' , md:'row'}}>

        <Box flex={1}>

          <Box sx={{width: '100%' , position: 'sticky' , top: '86px'}}>
          
           <ReactPlayer controls className="react-player" url={`https://www.youtube.com/watch?v=${id}`} />

           <Typography variant="h5" fontWeight="bold" color="#fff" p={2}>
            {title}
           </Typography>

           
           <Stack direction="row" justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
             
           <Link to={`/channel/${channelId}`}>

            <Typography variant={{sm: 'subtitle1' , md: 'h6'}} color= '#fff'>
              {channelTitle}
            <CheckCircle sx={{ fontSize: '12px' , color: 'gray' , ml: '5px' }}/>
            </Typography>
           
           </Link>

            
            <Stack direction='row' gap='20px' alignItems='center'>
              <Typography variant="body1" sx={{opacity: '0.7'}}>
                 {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{opacity: '0.7'}}>
                 {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>


           </Stack>


          </Box>

        </Box>

     <Box px={2} py={{ md: 1 , xs: 5 }} justifyContent='center' alignItems='center'>
         <Videos Videos={vid} direction='column'/>
     </Box>
      </Stack>





    </Box>
  )
}

export default VideoDetail