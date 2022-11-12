import { TextField, Input, Button, InputLabel, Typography, FormControl, Box } from '@mui/material'
import React from 'react'

const Upload = () => {

    // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      console.log('Working')
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <FormControl sx={{
        height: '16rem', width: '36rem', maxWidth: '100%', textAlign: 'center', position: 'relative'
    }} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()} >
      <Input type="file" id="input-file-upload" multiple={true} sx={{display: 'none'}} ref={inputRef} onChange={handleChange} />
      <InputLabel id="label-file-upload" htmlFor="input-file-upload"
       sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '2px',
        borderRadius: '1rem',
        borderStyle: 'dashed',
        borderColor: '#cbd5e1',
        backgroundColor: '#f8fafc'
       }}
      >
      <div>
          <Typography align="center">Drag and drop your file here or</Typography>
          <Button sx={{
            cursor: 'pointer',
            padding: '0.25rem',
            fontSize: '1rem',
            border: 'none',
            fontFamily: 'Oswald',
            backgroundColor: 'transparent'
          }} onClick={onButtonClick}>
            Upload a file
            </Button>
        </div> 
      </InputLabel>
      { dragActive && 
      <Box sx={{
        position: 'absolute', width: '100%', height: '100%',
        borderRadius: '1rem', top: '0px', right: '0px', bottom: '0px', left: '0px'
      }} 
           onDragEnter={handleDrag} 
           onDragLeave={handleDrag} 
           onDragOver={handleDrag} 
           onDrop={handleDrop}></Box> }

    </FormControl>
  )
}

export default Upload