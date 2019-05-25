import React from "react";
import { useDropzone } from "react-dropzone";
import "./FilePicker.scss";

function FilePicker(props) {
  const {
    acceptedFiles,
    rejectedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: "image/jpeg, image/png",
    maxSize: props.mSize * 1024 * 1024,
    multiple: props.multiple,
    onDropAccepted: files => {
      if (props.onAccept) props.onAccept(files);    
    },
    onDropRejected: files => {
      files.map((file, i) => {
        if (file.size > props.mSize * 1024 * 1024)
          alert(file.name + " dung lượng lớn hơn " + props.mSize + "MB");
      });
    }
  });
  return (
    <section className="file-picker-container">
      <div {...getRootProps({ className: "file-dropzone" })}>
        <input {...getInputProps()} />
        <p>Chọn ảnh - Ảnh có kích thước tối đa {props.mSize}MB</p>
      </div>
    </section>
  );
}

export default FilePicker;
