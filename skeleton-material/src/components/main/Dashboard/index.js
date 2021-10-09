import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "components/layouts/Header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(100)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </>
  );
}
