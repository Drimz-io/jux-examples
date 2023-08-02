/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { calculateStyles, COMPONENTS, createDrimz } from "@jux/dui";

const { styled } = createDrimz();

export const Button_1 = styled(COMPONENTS.JuxButton, {
  styles: calculateStyles({
    root: {
      width: "110px",
      border: "none",
      padding: "16px 20px",
      alignItems: "center",
      borderRadius: "6px",
      backgroundColor: "rgba(133,138,255,1)",
    },
    states: {
      hover: {
        root: {
          fontStyle: "normal",
          fontWeight: "400",
          backgroundColor: "rgba(63,205,102,1)",
          textDecorationLine: "none",
        },
      },
      active: {
        root: { fontWeight: "400", backgroundColor: "rgba(255,254,133,1)" },
      },
    },
  }),
});

export const Button_2 = styled(COMPONENTS.JuxButton, {
  styles: calculateStyles({
    root: {
      width: "110px",
      border: "none",
      padding: "16px 20px",
      alignItems: "center",
      borderRadius: "6px",
      backgroundColor: "#85D8FF",
    },
    states: {
      hover: { root: { backgroundColor: "rgba(7,159,233,1)" } },
      active: { root: { backgroundColor: "rgba(153,221,253,1)" } },
    },
  }),
});
