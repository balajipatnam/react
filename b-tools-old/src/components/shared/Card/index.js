import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function MUICard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{props.children}</CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
