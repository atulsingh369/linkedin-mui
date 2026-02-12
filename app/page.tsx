import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid size={{ lg: 3 }} display={{ xs: "none", lg: "block" }}>
            <LeftSidebar />
          </Grid>

          {/* Center Feed */}
          <Grid size={{ xs: 12, md: 8, lg: 6 }}>
            <Feed />
          </Grid>

          {/* Right Sidebar */}
          <Grid size={{ md: 4, lg: 3 }} display={{ xs: "none", md: "block" }}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
