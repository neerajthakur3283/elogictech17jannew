import React from "react";
import CardApps from "./CardApps";
import PageBanner from "./PageBanner";
import YouAre from "./_components/YouAre";
import Industries from "./_components/Industries";
import HardwareEcosystem from "./_components/HardwareEcosystem";
import OurProcess from "./_components/OurProcess";

function page() {
  return (
    <>
      <PageBanner />
      <CardApps />
      <Industries />
      <YouAre />
      <HardwareEcosystem />
      <OurProcess />
    </>
  );
}

export default page;
