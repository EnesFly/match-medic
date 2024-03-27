import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IconButton, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function InputFiles() {
  const theme = useTheme();
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: "2rem",
    borderColor: theme.palette.primary.borderColor,
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#c4c4c4",
    outline: "none",
    transition: "border .24s ease-in-out"
  };
  
  const activeStyle = {
    borderColor: "#f2f"
  };
  
  const acceptStyle = {
    borderColor: "#f8f"
  };
  
  const rejectStyle = {
    borderColor: "#f2f"
  };
  const dropZoneTextStyle={
    fontWeight:"bold",
    color:"black",
    fontSize: "13px"
  };
  const [files, setFiles] = useState({});
  const {
    fileRejections,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) =>
        acceptedFiles.reduce(
          (acc, file) => ({
            ...acc,
            [file.name]: {
              file,
              fileType: ""
            }
          }),
          prevFiles
        )
      );
    },
    accept: {
        'image/*': ['.jpeg', '.jpg', '.png'],
       },
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  const acceptedFileItems = Object.keys(files).map((fileName) => {
    const currentFile = files[fileName].file;
    const sizeInMB = (currentFile.size / 1000000).toFixed(2);  
    const onSelectChange = (e) => {
      e.persist();
      setFiles((prevFiles) => {
        return {
          ...prevFiles,
          [fileName]: {
            ...prevFiles[fileName],
            fileType: e.target.value
          }
        };
      });
    };
    const size = currentFile.path - currentFile.size;
    return (

      `${fileName}, ${sizeInMB} MB`

    );
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="container">
      {/* <div {...getRootProps({ style })}> */}
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <FileUploadOutlinedIcon 
        sx={{
          fontSize: "36px",
          color:"black"
        }}/>
        <Typography
        sx={dropZoneTextStyle}
        >Drag and Drop</Typography>
        <Typography
        sx={{
          fontSize: "13px"
        }}
        >or</Typography>
       <IconButton
          sx={{
            borderRadius: "2rem",
            backgroundColor: "black",
            '&:hover': {
              backgroundColor: theme.palette.primary.borderColor, 
            },
          }}
        >
          <Typography
            sx={[
              dropZoneTextStyle,
              { color: "white" },
            ]}
          >
            Browse Files
          </Typography>
        </IconButton>

      </div>
        <h4>Accepted files</h4>
        <TextField
          inputProps={{
              style: {
                  padding: "5px",
                  borderRadius: "2rem", // Affects the inner input element
              }
          }}
          InputProps={{
              style: {
                  borderRadius: "2rem", // Affects the outer Input component
              }
          }}
          multiline
          value={acceptedFileItems}
          sx={{
              fontSize: "12px",
              fontWeight: "bold",
              width:"100%",
              borderRadius: "3rem", // Might not be necessary if the above works
          }}
      >
      </TextField>
        <ul>{fileRejectionItems}</ul>
        <button onClick={() => console.log(files)}>console log files</button>
    </section>
  );
}

export default InputFiles;
