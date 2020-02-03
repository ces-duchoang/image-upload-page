import React from "react";
import "./App.scss";
import FilePicker from "./commonUI/FilePicker";
import Button from "./commonUI/Button";
import TextArea from "./commonUI/TextArea";
import Select from "react-select";
class App extends React.Component {
  state = {
    copied: false
  };
  render() {
    console.log('this is test');
    var ListFile = list.map((e, i) => (
      <div className="file-line" key={i}>
        <span>{e.name}</span>
      </div>
    ));
    return (
      <div className="container">
        <div className="left-side">
          <div className="button-wrap">
            <span className="select-wrap">
              <Select defaultValue={options[0]} options={options} />
            </span>
            <Button
              type={"btn-" + (this.state.copied ? "Green" : "ok")}
              display={this.state.copied ? " Copied" : " Copy"}
              icon="fas fa-paste"
              onClick={e => {
                this.setState({ copied: true }, () => {
                  setTimeout(() => {
                    this.setState({ copied: false });
                  }, 1000);
                });
              }}
            />
          </div>
          <div className="text-wrap">
            <TextArea display="Link" className="text-result" />
          </div>
        </div>
        <div className="right-side">
          <div className="button-wrap">
            <span className="select-wrap">
              <Select defaultValue={servers[0]} options={servers} />
              <i className="fas fa-cog" />
            </span>
            <span>
              <Button
                icon="fas fa-window-close"
                display=" Hủy"
                type="btn-Yellow"
                className="btn-s"
              />
              <Button
                icon="fas fa-cloud-upload-alt"
                type={"btn-Green"}
                display=" Start upload"
              />
            </span>
          </div>
          <div className="upload-wrap">
            <span>Upload file</span> <span>Link transfer</span>
          </div>
          <div className="upload-space">
            <div className="file-picker-wrap">
              <FilePicker mSize={5} />
            </div>
            <div className="upload-content">{ListFile}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const options = [
  { value: 0, label: "Direct" },
  { value: 1, label: "JSON" },
  { value: 2, label: "IMG" }
];
const list = [];
const servers = [{ value: 0, label: "Google" }, { value: 1, label: "Imgur" }];
