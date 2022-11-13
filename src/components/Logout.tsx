import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import { Logout as LogoutIcon } from "tabler-icons-react";

import { LeafletControl } from "../utils/LeafletControl";

export function Logout() {
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    localStorage.clear();
    navigate("/");
  }, [navigate]);

  return (
    <LeafletControl position={"topleft"} cssName="logout">
      <ActionIcon onClick={handleLogout} variant={"default"}>
        <LogoutIcon />
      </ActionIcon>
    </LeafletControl>
  );
}
