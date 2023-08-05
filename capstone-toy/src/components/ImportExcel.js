// import React from "react";
// import { useDropzone } from "react-dropzone";
// import * as XLSX from "xlsx";

// const ImportExcel = () => {
//   const onDrop = (files) => {
//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const data = new Uint8Array(e.target.result);
//         const workbook = XLSX.read(data, { type: "array" });
//         const worksheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[worksheetName];
//         const jsonData = XLSX.utils.sheet_to_json(worksheet);
//         console.log(jsonData);
//       };
//       reader.readAsArrayBuffer(file);
//     });
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       {isDragActive ? (
//         <p>Drop the files here ...</p>
//       ) : (
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       )}
//     </div>
//   );
// };

// export default ImportExcel;

import React from "react";
import { useDropzone } from "react-dropzone";
import readXlsxFile from "read-excel-file";

const schema = {
  A: {
    prop: "fullName",
    type: String,
  },
  B: {
    prop: "yearsOld",
    type: String,
  },
  C: {
    prop: "location",
    type: String,
  },
  D: {
    prop: "date",
    type: String,
  },
};

const ImportExcel = () => {
  const onDrop = (files) => {
    files.forEach((file) => {
      readXlsxFile(file, { schema }).then(({ rows, errors }) => {
        console.log(rows);
      });
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default ImportExcel;
