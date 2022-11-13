import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GridDots } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";

import { LeafletControl } from "../../utils/LeafletControl";

export const LidarView = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    localStorage.clear();
    navigate("/lidar");
  }, [navigate]);

  return (
    <LeafletControl position={"bottomleft"} cssName="lidar">
      <ActionIcon onClick={handleClick} variant={"default"} size={42}>
        <GridDots />
      </ActionIcon>
    </LeafletControl>
  );
};
