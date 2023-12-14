/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { calculateStyles, COMPONENTS, createDrimz, PropsOf } from "@jux/dui";
import React from "react";

const { styled } = createDrimz();

const Logo_real_size_main = styled(COMPONENTS.JuxSvg, {
  styles: calculateStyles({ root: { color: "rgba(0,0,0,1)" }, states: {} }),
});

export type Logo_real_size_Props = PropsOf<typeof COMPONENTS.JuxSvg>;

export const Logo_real_size = (props: Logo_real_size_Props) => (
  <Logo_real_size_main {...props} />
);

Logo_real_size.defaultProps = {
  content:
    '<svg width="62" height="17" viewBox="0 0 62 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 16.5C4.04635 16.5 2.78064 15.5113 1 13.9148L3.44112 10.1029C4.5219 11.2355 8 13.5 8 9.4946V6.00003L3 6V1L13 1.00003V10.1029C13 14 10.8005 16.5 7 16.5Z" fill="currentColor"></path>\n<path d="M54.1581 8.5L49 16H54.9402L60 8.5L54.9402 1H49L54.1581 8.5Z" fill="currentColor"></path>\n<path d="M36.1064 8.5L31 16H36.8807L39 12.8268L41.1193 16H47L41.8936 8.5L47 1H41.1193L39 4.17322L36.8807 1H31L36.1064 8.5Z" fill="currentColor"></path>\n<path d="M22.5 16.5C17.5 16.5 15 13.5 15 9.5V1H20V9C20 10.5 21 11.6759 22.5 11.6759C24 11.6759 25 10.5 25 9V1H30V9.5C30 13.5 27.5 16.5 22.5 16.5Z" fill="currentColor"></path>\n</svg>\n',
};
