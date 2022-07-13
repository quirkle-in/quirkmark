import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

const PageComponent: React.FC<Props> = ({ children }) => {
  return <Paper sx={{ backgroundColor: "#f3f3f3", minHeight: "100vh" }}>{children}</Paper>
}

export default PageComponent