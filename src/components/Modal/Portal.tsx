import React from "react";
import ReactDom from "react-dom";

import "./Modal.css";

type PortalProps = {
  open: boolean;
  onClose: () => void;
};

export function Portal({
  open,
  children,
  onClose,
}: React.PropsWithChildren<PortalProps>) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-styles" />
      <div className="portal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("root")! // <div id="portal"></div> @todo
  );
}
