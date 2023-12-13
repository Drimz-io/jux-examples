/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { calculateStyles, COMPONENTS, createDrimz, PropsOf } from "@jux/dui";
import React from "react";

const { styled } = createDrimz();

import { Text_1, type Text_1_Props } from "./Text_1";
import { Button_2, type Button_2_Props } from "./Button_2";

const Div_1_main = styled(COMPONENTS.JuxDiv, {
  styles: calculateStyles({
    root: {
      gap: "16px 0",
      width: "257px",
      border: "3px solid #E6E6E6",
      height: "228px",
      display: "flex",
      alignItems: "center",
      borderColor: "rgba(102, 102, 102, 1)",
      borderStyle: "Solid",
      borderWidth: "1px",
      borderRadius: "8px",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "white",
    },
    states: {},
  }),
});

export type Div_1_Props = PropsOf<typeof COMPONENTS.JuxDiv> & {
  Text_1_Props?: Text_1_Props;
  Button_2_Props?: Button_2_Props;
};

export const Div_1 = ({
  Text_1_Props,
  Button_2_Props,
  ...props
}: Div_1_Props) => (
  <Div_1_main {...props}>
    {props.children || (
      <>
        <Text_1 {...Text_1_Props} />
        <Button_2 {...Button_2_Props} />
      </>
    )}
  </Div_1_main>
);

Div_1.defaultProps = {};
