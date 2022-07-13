import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Landing: React.FC = () => {
  const [content, setContent] = useState<string>("*Quirkmark* is **Awesome**");

  return (
    <Grid container justifyContent={"center"} padding={3}>
      <Grid item>
        <Grid container direction="column" rowGap={2}>
          <Grid item sx={{ background: "gray" }} width="980px">
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Grid container>
                  <Grid item>{/* custom edit url */}</Grid>
                  <Grid item>{/* custom edit code */}</Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="primary">Go</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            border="1px solid red"
            height={"85vh"}
            maxWidth="980px"
            sx={{ overflowY: "scroll" }}
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
