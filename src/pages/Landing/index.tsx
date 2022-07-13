import { Typography } from '@mui/material';
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';

const Landing: React.FC = () => {
  const [content, setContent] = useState<string>("*Quirkmark* is **Awesome**")
  return <ReactMarkdown>{content}</ReactMarkdown>
}

export default Landing;