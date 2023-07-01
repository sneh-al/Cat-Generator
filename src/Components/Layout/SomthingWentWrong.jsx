import React from "react";
import { useNavigate } from "react-router-dom";

const SomthingWentWrong = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate(0);
  };
  return (
    <div>
      Somthing Went Wrong
      <button onClick={handleRefresh}>Refresh page</button>
    </div>
  );
};

export default SomthingWentWrong;
