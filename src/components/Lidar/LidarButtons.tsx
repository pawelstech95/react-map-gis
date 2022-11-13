import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import { ArrowBackUp, Logout as LogoutIcon } from "tabler-icons-react";

export const LidarButtons = () => {
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    localStorage.clear();
    navigate("/");
  }, [navigate]);
  const handleBack = useCallback(() => {
    localStorage.clear();
    navigate("/app");
  }, [navigate]);

  return (
    <div className="custom-control-button">
      <ActionIcon onClick={handleLogout} className="logout">
        <LogoutIcon color="white" />
      </ActionIcon>
      <ActionIcon onClick={handleBack} className="back">
        <ArrowBackUp color="white" />
      </ActionIcon>
    </div>
  );
};
