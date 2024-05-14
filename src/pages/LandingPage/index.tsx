import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Images } from "@/constants";

export default function LandingPage() {
  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ marginTop: "20px" }}>
          {Images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
