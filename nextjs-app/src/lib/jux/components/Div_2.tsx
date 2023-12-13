/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { calculateStyles, COMPONENTS, createDrimz, PropsOf } from "@jux/dui";
import React from "react";

const { styled } = createDrimz();

import { Div_1, type Div_1_Props } from "./Div_1";

const Div_2_main = styled(COMPONENTS.JuxDiv, {
  styles: calculateStyles({
    root: {
      width: "500px",
      border: "3px solid #E6E6E6",
      height: "415px",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "white",
    },
    states: {},
  }),
});

export type Div_2_Props = PropsOf<typeof COMPONENTS.JuxDiv> & {
  Div_1_Props?: Div_1_Props;
};

export const Div_2 = ({ Div_1_Props, ...props }: Div_2_Props) => (
  <Div_2_main {...props}>
    {props.children || (
      <>
        <Div_1 {...Div_1_Props} />
      </>
    )}
  </Div_2_main>
);

Div_2.defaultProps = {};
