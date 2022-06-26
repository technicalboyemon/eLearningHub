import React from "react";
import { useEffect, useState } from "react";
import { postData } from "../api/api";

const Translate = ({ text, type }) => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState("");
  const fecth = async () => {
    setLoad(true);
    if (type === "en") {
      setData(text);
    } else {
      const info = await postData("translate", { text: text || "" });
      if (info?.err) {
      } else {
        // console.log(info);
        setData(type === "en" ? text : info);
        setLoad(false);
      }
    }
  };
  useEffect(() => {
    fecth();
  }, [type]);
  return <span>{load ? "loading..." : data}</span>;
};

export default Translate;
