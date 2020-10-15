import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingSpinner = () => {
  const spinner = (
    <LoadingOutlined style={{ color: "#ffa500", fontSize: 48 }} spin />
  );
  return (
    <div className="loading-spinner">
      <Spin indicator={spinner} />
    </div>
  );
};

export default LoadingSpinner;
