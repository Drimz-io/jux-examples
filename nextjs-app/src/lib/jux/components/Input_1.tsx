/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { calculateStyles, COMPONENTS, createDrimz, PropsOf } from "@jux/dui";
import React from "react";

const { styled } = createDrimz();

const Input_1_main = styled(COMPONENTS.JuxInput, {
  styles: calculateStyles({
    root: {
      color: "#3B3B3B",
      width: "320px",
      border: "1px solid #9C9C9C",
      height: "36px",
      display: "inline-block",
      padding: "9px 12px",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: 500,
      borderRadius: "4px",
      "&::placeholder": { color: "#9C9C9C" },
      backgroundColor: "{color.specific.input_bg}",
    },
    states: {
      focus: { root: { border: "1px solid #3851DD" } },
      hover: { root: { border: "1px solid #3B3B3B" } },
      disabled: { root: { color: "#9C9C9C", border: "1px solid #E6E6E6" } },
    },
  }),
});

export type Input_1_Props = PropsOf<typeof COMPONENTS.JuxInput>;

export const Input_1 = (props: Input_1_Props) => <Input_1_main {...props} />;

Input_1.defaultProps = { label: "Input", placeholder: "Placeholder" };
