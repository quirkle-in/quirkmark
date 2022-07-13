import { Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

const PageComponent: React.FC<Props> = ({ children }) => {
  return (
    <Grid container justifyContent="center" padding={1} sx={{ backgroundColor: "#f3f3f3" }} minHeight={"100vh"}>
      <Grid item maxWidth="980px" width="100%" border={"1px solid red"} padding={1} >
        <Grid container direction="column">
          <Grid item>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PageComponent