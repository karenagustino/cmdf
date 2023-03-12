import React, { useState } from "react";
import {
  CloseButton,
  Button,
  OverlayTrigger,
  Tooltip,
  TooltipProps,
  Table,
  Form
} from "react-bootstrap";

export interface FileUploadProps {
  onChange?: (files: Array<File>) => void;
  maxFileSize?: number;
  // need to add optional file description. user may want to add description to go with file.
  value?: Array<File>;
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
  accept?: string;
  maxFileCount?: number;
}

const FileUpload: React.FunctionComponent<FileUploadProps> = ({
  onChange,
  maxFileSize,
  value,
  accept,
  maxFileCount
}) => {
  // the list of files to be uploaded
  const [list, setList] = useState(value || []);

  const rerender = () => {
    // see https://stackoverflow.com/a/67354136/147530
    // for why we need to use slice
    setList(list.slice());
    // using the pattern here: https://stackoverflow.com/a/70443467/147530
    // it is the simplest thing to do and it works
    onChange && onChange(list);
  };

  const handleUp = (e: any, i: number) => {
    const temp = list[i];
    list[i] = list[i - 1];
    list[i - 1] = temp;
    rerender();
  };

  const handleDown = (e: any, i: number) => {
    const temp = list[i];
    list[i] = list[i + 1];
    list[i + 1] = temp;
    rerender();
  };

  const handleDelete = (e: any, i: number) => {
    list.splice(i, 1);
    rerender();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.currentTarget.files;
    if (files) {
      for (var i = 0; i < files.length; i++) {
        // use file.arrayBuffer() to read the file
        // https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer
        // While similar to the FileReader.readAsArrayBuffer() method, arrayBuffer() returns a promise rather than being an event-based API, as is the case with the FileReader interface's method.
        // there is also the stream method: https://developer.mozilla.org/en-US/docs/Web/API/Blob/stream
        list.push(files[i]);
      }
      rerender();
    }
  };

  // https://www.pluralsight.com/guides/how-to-display-tooltip-in-react-bootstrap
  const renderTooltip = (
    props: JSX.IntrinsicAttributes &
      TooltipProps &
      React.RefAttributes<HTMLDivElement>
  ) => <Tooltip {...props}>File exceeds maximum allowable size</Tooltip>;

  const validate = (file: File) => {
    // see https://www.toptal.com/designers/htmlarrows/arrows/ for unicode for html symbols
    if (maxFileSize && maxFileSize > 0 && file.size > maxFileSize) {
      return (
        <OverlayTrigger placement="top" overlay={renderTooltip}>
          <span>{String.fromCharCode(9888)}</span>
        </OverlayTrigger>
      );
    }
  };

  // https://stackoverflow.com/a/49482317/147530
  // this method converts the list into an HTML table
  // for rendering
  const getTableBodyAsReactElement = () => {
    if (list) {
      return (
        <Table bordered striped hover>
          
          {/* <tbody>
            {list.map((item, i) => {
              // the keys are there to take care of react warning otherwise
              return (
                <tr key={i}>
                  <td key={i + ":#"}>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.size}</td>
                  <td>{item.type}</td>
                  <td>
                    {i > 0 ? (
                      <Button
                        key={i + ":up"}
                        variant="light"
                        onClick={(e) => handleUp(e, i)}
                      >
                        {String.fromCharCode(8593)}
                      </Button>
                    ) : null}
                    {i < list.length - 1 ? (
                      <Button
                        key={i + ":down"}
                        variant="light"
                        onClick={(e) => handleDown(e, i)}
                      >
                        {String.fromCharCode(8595)}
                      </Button>
                    ) : null}
                    <CloseButton
                      key={i + ":del"}
                      onClick={(e) => handleDelete(e, i)}
                    ></CloseButton>
                    {validate(item)}
                  </td>
                </tr>
              );
            })}
          </tbody> */}
        </Table>
      );
    }
  };

  const renderFileInput = (maxFileCount) => {
    if (!(maxFileCount > 0) || list.length < maxFileCount) {
      console.log("renderFileInput");
      return (
        <Form.Control type="file" onChange={handleOnChange} accept={accept} />
      );
    }
  };

  // the render method should render the list of files
  // and display a button to choose more files
  return (
    <>
      {getTableBodyAsReactElement()}
      {renderFileInput(maxFileCount)}
    </>
  );
};

export default FileUpload;
