import React, { useEffect, useState } from "react";
import { useZirhStref } from "../../context/ZirhContext";
import { METHOD } from "../../api/zirhrpc";
import { sendRpcRequest } from "../../api/webClient";

const Vuln = () => {
      const { stRef } = useZirhStref();
    const [vuln, setVuln] = useState([]);
  const getVuln = async () => {
    try {
      const res = await sendRpcRequest(stRef, METHOD.VULN_GET, {1:1});
      if (res.status === METHOD.OK) {
        console.log(res);
        setVuln(res.result[1]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVuln();
  }, []);

  return <div>
    {/* {vuln} */}
  </div>;
};

export default Vuln;
