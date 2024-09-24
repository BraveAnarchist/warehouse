import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export default function Body({ search, cluster, city, space,arr}) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", display:"flex",flexWrap:"wrap",justifyContent:"space-evenly", gap:"1vw",padding:"1vw"}}>
          {arr.map((ele, idx) => {
            return <Paper elevation={8} sx={{minWidth:"18vw",padding:"1vw"}}>
                <h3>Name: {ele.name}</h3>
                <h3>City: {ele.city}</h3>
                <h3>Cluster: {ele.cluster}</h3>
                <h3>Space: {ele.space_available}</h3>
                <h3>Type: {ele.type}</h3>
                <div style={{display:"flex",justifyContent:"end", color:"red"}}>
                <Link to={`/${ele.id}`} style={{marginTop:"3vh"}}>More Details</Link>
                </div>
                
            </Paper>;
          })}
        </Box>
      </Container>
    </>
  );
}
