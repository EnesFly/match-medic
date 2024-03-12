import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { TextField, Typography } from "@mui/material";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: "2rem",
  borderColor: "#26C2E7",
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
function InputFiles({}) {
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
    const MBsize =((parseInt(currentFile.path) - parseInt(currentFile.size))/ 1000000).toFixed(2);
    const size = currentFile.path - currentFile.size;
    return (

      `${fileName}, ${size} bytes`

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
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only .jpeg, .jpg, .png files will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <TextField
        inputProps={{style: {
            padding: "5px",
        }}}
        multiline
        value={acceptedFileItems}
        sx={{
            width:"100%",
            border:"none"
        }}
        >
        </TextField>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
        <button onClick={() => console.log(files)}>console log files</button>
      </aside>
    </section>
  );
}

export default InputFiles;
