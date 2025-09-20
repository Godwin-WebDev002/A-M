import { Ethos } from "./Ethos";
import { Header } from "./Header";
import { OvulanIcon } from "./OvulanIcon";
import { Subscribe } from "./Subscribe";
import { TimeArt } from "./TimeArt";
import { TopCollection } from "./TopCollection";
import { WhatPeopleSay } from "./WhatPeopleSay";

export const Components = () => {
  return (
    <>
      <Header />
      <TimeArt />
      <TopCollection />
      <OvulanIcon />
      <Ethos />
      <WhatPeopleSay />
      <Subscribe />
    </>
  );
};
