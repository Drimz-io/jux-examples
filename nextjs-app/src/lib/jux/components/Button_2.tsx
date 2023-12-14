/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { calculateStyles, COMPONENTS, createDrimz, PropsOf } from "@jux/dui";
import React from "react";

const { styled } = createDrimz();

const Button_2_JuxSvg_0_main = styled(COMPONENTS.JuxSvg, {
  styles: calculateStyles({
    root: { color: "rgba(255, 160, 122, 100%)" },
    states: {},
  }),
});

export type Button_2_JuxSvg_0_Props = PropsOf<typeof COMPONENTS.JuxSvg>;

export const Button_2_JuxSvg_0 = (props: Button_2_JuxSvg_0_Props) => (
  <Button_2_JuxSvg_0_main {...props} />
);

Button_2_JuxSvg_0.defaultProps = {
  content:
    '<svg width="62" height="17" viewBox="0 0 62 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 16.5C4.04635 16.5 2.78064 15.5113 1 13.9148L3.44112 10.1029C4.5219 11.2355 8 13.5 8 9.4946V6.00003L3 6V1L13 1.00003V10.1029C13 14 10.8005 16.5 7 16.5Z" fill="currentColor"></path>\n<path d="M54.1581 8.5L49 16H54.9402L60 8.5L54.9402 1H49L54.1581 8.5Z" fill="currentColor"></path>\n<path d="M36.1064 8.5L31 16H36.8807L39 12.8268L41.1193 16H47L41.8936 8.5L47 1H41.1193L39 4.17322L36.8807 1H31L36.1064 8.5Z" fill="currentColor"></path>\n<path d="M22.5 16.5C17.5 16.5 15 13.5 15 9.5V1H20V9C20 10.5 21 11.6759 22.5 11.6759C24 11.6759 25 10.5 25 9V1H30V9.5C30 13.5 27.5 16.5 22.5 16.5Z" fill="currentColor"></path>\n</svg>\n',
};

const Button_2_main = styled(COMPONENTS.JuxButton, {
  styles: calculateStyles({
    root: {
      gap: "8px",
      color: "#FFFFFF",
      width: "auto",
      border: "none",
      cursor: "pointer",
      height: "36px",
      display: "flex",
      padding: "8px 16px",
      fontSize: "14px",
      fontStyle: "normal",
      alignItems: "center",
      fontFamily: "Inter",
      fontWeight: "500",
      lineHeight: "20px",
      borderRadius: "4px",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "rgba(56, 81, 221, 100%)",
    },
    states: {
      focus: { root: { outline: "none" } },
      hover: { root: { backgroundColor: "rgba(39, 64, 205, 100%)" } },
      active: { root: { outline: "none", backgroundColor: "#1B32B8" } },
      disabled: { root: { backgroundColor: "#98A6F9" } },
      "focus-visible": {
        root: { outline: "2px solid #3851DD", outlineOffset: "2px" },
      },
    },
  }),
});

export type Button_2_Props = PropsOf<typeof COMPONENTS.JuxButton> & {
  Button_2_JuxSvg_0_Props?: Button_2_JuxSvg_0_Props;
};

export const Button_2 = ({
  Button_2_JuxSvg_0_Props,
  ...props
}: Button_2_Props) => (
  <Button_2_main {...props}>
    {props.children || (
      <>
        <Button_2_JuxSvg_0 {...Button_2_JuxSvg_0_Props} />
      </>
    )}
  </Button_2_main>
);

Button_2.defaultProps = {};
