import { Box,Avatar, Container, Button } from "@mui/material";
import Stack from '@mui/material/Stack';

function HomePage_Post() {
  return (
    <Container
      sx={{
        bgcolor: "lightgreen",
        minwidth: 300,
        p:5,
        m:2
      }}
    >
      <Box sx={{ bgcolor: "blue", padding: 3,m:2, mr: 10 }}>
      <Stack direction={"row"} spacing={2}>
      <Avatar alt="Remy Sharp" src="default.png" xs="1" />
      <Box component={"span"} > First Name Last Name</Box>
      </Stack>
      <Box>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
      </Box>
      <Stack direction={"row"}>
      <Button color="secondary" variant="contained"> Like </Button>
      <Button color="secondary" variant="contained"> Comment </Button>
      <Button color="secondary" variant="contained"> Share </Button>

      </Stack>
      </Box>
      <Box sx={{ bgcolor: "blue", padding: 3,m:2, mr: 10 }}>
      <Stack direction={"row"} spacing={2}>
      <Avatar alt="Remy Sharp" src="default.png" xs="1" />
      <Box component={"span"}> First Name Last Name</Box>
      </Stack>
      <Box>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
      </Box>
      <Stack direction={"row"}>
      <Button color="secondary" variant="contained"> Like </Button>
      <Button color="secondary" variant="contained"> Comment </Button>
      <Button color="secondary" variant="contained"> Share </Button>

      </Stack>
      </Box>
    </Container>
  );
}
export default HomePage_Post;
