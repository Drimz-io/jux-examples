/**
 *  THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 */

import { calculateStyles, COMPONENTS, createDrimz, PropsOf } from "@jux/dui";
import React from "react";

const { styled } = createDrimz();

const Text_1_main = styled(COMPONENTS.JuxText, {
  styles: calculateStyles({
    root: {
      color: "black",
      width: "auto",
      height: "auto",
      display: "inline-block",
      fontSize: "{typography.specific.card_text.fontSize}",
      textAlign: "center",
      fontFamily: "{typography.specific.card_text.fontFamily}",
      fontWeight: "{typography.specific.card_text.fontWeight}",
      lineHeight: "{typography.specific.card_text.lineHeight}",
      letterSpacing: "{typography.specific.card_text.letterSpacing}",
    },
    states: {},
  }),
});

export type Text_1_Props = PropsOf<typeof COMPONENTS.JuxText>;

export const Text_1 = (props: Text_1_Props) => <Text_1_main {...props} />;

Text_1.defaultProps = { text: "This is your last chance" };
