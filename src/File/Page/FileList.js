import React from "react";
import { NavLink } from "react-router-dom";

const FileList = (props) => {
  if (props.fileList.length === 0) {
    return (
      <div className="text-center my-3">
        <p>
          No file found. Wanna Upload?{" "}
          <NavLink to="/file-upload">Upload File</NavLink>
        </p>
      </div>
    );
  }
  return (
    <div className="table-responsive container mt-3">
      <table className="table">
        <tr>
          <th>S. No.</th>
          <th>File Name</th>
          <th>File Description</th>
          <th>Date of Upload</th>
          <th>Action</th>
        </tr>
        {props.fileList.map((file, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{file.name}</td>
            <td>{file.desc}</td>
            <td>{file.date}</td>
            <td>
              <button className="button text-primary">Delete</button> ||{" "}
              <button className="button">Download</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FileList;
