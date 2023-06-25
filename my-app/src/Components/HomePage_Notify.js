import { Box,Stack,Avatar } from "@mui/material";

function HomePage_Notify(){
    return(
    <Box
    sx={{
        bgcolor:'hotpink',
        minwidth: 300,
        height: 300,
        margin: 1,
        p:3
    }}
    >
        
    <Stack direction={"row"} spacing={2}>
      <Avatar alt="Remy Sharp" src="default.png" xs="1" />
      <Box component={"span"} > First Name Last Name</Box>
      </Stack>
      <Box>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
      </Box>

    </Box>

    )
}
export default HomePage_Notify;