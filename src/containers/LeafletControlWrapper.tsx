import React from "react";

import { Logout } from "../components/Logout";
import { MinimapControl } from "../components/MinimapBounds";
import { SearchField } from "../components/SearchField";
import { LeafletRuler } from "../components/ruler/LeafleatRuler";
import { MeasureControlWrapper } from "../components/MeasureControl/MeasureControlWrapper";
import { MyPosition } from "../components/MyPosition";
import { RedirectControl } from "../components/RedirectPanel/RedirectControl";
import { LidarView } from "../components/Lidar/LidarView";
import { PrintControl } from "../components/PrintControl/PrintControl";
import { ExportImageControl } from "../components/ExportImageControl/ExportImageControl";
import { Modal } from "../components/Modal/Modal";

export const LeafletControlWrapper = () => {
  return (
    <>
      <MinimapControl />
      <SearchField />
      <LeafletRuler />
      <MeasureControlWrapper />
      <MyPosition />
      <LidarView />
      <RedirectControl />
      <Logout />
      <Modal />
      <PrintControl />
      <ExportImageControl />
    </>
  );
};
