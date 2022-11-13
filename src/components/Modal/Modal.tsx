import React, { useState } from "react";
import { ActionIcon } from "@mantine/core";
import { File } from "tabler-icons-react";

import { Portal } from "./Portal";
import { LeafletControl } from "../../utils/LeafletControl";
import Pdf from "../Pdf/Pdf";

import "./Modal.css";

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <LeafletControl position={"topleft"} cssName="pdf-button">
        <ActionIcon onClick={() => setIsOpen(true)} variant={"default"}>
          <File />
        </ActionIcon>
      </LeafletControl>
      <Portal open={isOpen} onClose={() => setIsOpen(false)}>
        <Pdf />
      </Portal>
    </div>
  );
}
