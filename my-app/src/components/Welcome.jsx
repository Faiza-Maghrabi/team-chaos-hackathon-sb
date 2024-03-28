import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ResponsiveAppBar } from "./ResponsiveAppBar";
export const Welcome = () => {
  return (<Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "40px" }}>
    <ResponsiveAppBar/>
    <Typography variant="h1" component="h2" >
 UK Life: Sorted!
</Typography>
    <Typography variant="h4" component="body2">UK Life: Sorted! is a website to help you get your baring in the UK with ease. We give you a step by step guide into how to start your life in the UK. You'll find out how to access services in the UK such as how to find work, register to NHS services, how to apply for schools and provide you with relevant cultural cues!</Typography>
    </Stack>
  )
}