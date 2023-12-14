/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { calculateStyles, COMPONENTS, createDrimz, PropsOf } from "@jux/dui";
import React from "react";

const { styled } = createDrimz();

const Text_2_main = styled(COMPONENTS.JuxText, {
  styles: calculateStyles({
    root: {
      display: "inline-block",
      fontSize: "14px",
      fontStyle: "normal",
      fontFamily: "Inter",
      fontWeight: "500",
      lineHeight: "20px",
    },
    states: {},
  }),
});

export type Text_2_Props = PropsOf<typeof COMPONENTS.JuxText>;

export const Text_2 = (props: Text_2_Props) => <Text_2_main {...props} />;

Text_2.defaultProps = { text: "Uncolored text" };
