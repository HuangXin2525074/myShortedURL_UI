import React, { useState } from "react";
import Alert from "../Alert/Alert";
import axios from "axios";
import configData from "../../config/config.json";
import Button from "../Button/Button";
import { validateUrl } from "../../utils/utils";

const AddUrlComponent = () => {
  const [url, setUrl] = useState("");
  const [alertVisible, setAlertVisibility] = useState(false);
  const [shorted_url, setShorted_url] = useState("");
  const [error_alert, setError_alert] = useState(false);

  const onClickhandle = () => {
    setAlertVisibility(false);
    setError_alert(false);
    if (!url || !validateUrl(url)) {
      setError_alert(true);
      return;
    }
    axios
      .post(
        `${configData.SERVER_URL}/${configData.stage}/generate-shorted-url`,
        { method: "create-shorted-url", data: { origUrl: url } }
      )
      .then((res) => {
        console.log(res.data);
        if (res && res.data) {
          const short_url = res.data.URL_Store.shortUrl;
          console.log("short_url:", short_url);
          setShorted_url(short_url);
          setAlertVisibility(true);
        } else {
          setError_alert(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

    setUrl("");
  };

  return (
    <>
      <input
        onChange={(event) => setUrl(event.target.value)}
        value={url}
        className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
        type="text"
      />
      <div className="col text-center">
        <Button onClick={() => onClickhandle()}>Shorten!</Button>
      </div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>{shorted_url}</Alert>
      )}
      {error_alert && (
        <Alert
          color="danger"
          onClose={() => {
            setError_alert(false);
          }}
        >
          Please enter a valid URL!
        </Alert>
      )}
    </>
  );
};

export default AddUrlComponent;
