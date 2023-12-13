"use client";

import styles from "../page.module.css";
import {
  Button_1,
  Button_2,
  Div_1,
  Div_2,
  Div_3,
  Input_1,
  Logo_real_size,
} from "../../lib/jux/components";

const scroll = (to: number) =>
  window.scrollTo({
    left: 0,
    top: to,
    behavior: "smooth",
  });
const scrollDown = () => scroll(window.innerHeight);
const scrollUp = () => scroll(0);

export default function Sandbox() {
  return (
    <main className={styles.main}>
      <Div_3 />

      <Div_1>
        <Button_1 onClick={scrollDown} />
        <Button_1 onClick={scrollDown}>
          Hello World! <span style={{ fontSize: "12px" }}>👋</span>
        </Button_1>
        <Button_2 onClick={scrollDown} />
      </Div_1>

      <Input_1 placeholder={"What is your quest?"} />

      <Div_1
        style={{
          padding: "16px",
          backgroundColor: "lightgrey",
          borderStyle: "Solid",
          borderWidth: "1px",
          borderImage:
            "linear-gradient(lightcoral, lightsalmon, lightgoldenrodyellow, lightpink, lightsteelblue, lightseagreen) 1 / 1 / 0 stretch",
        }}
      >
        <Logo_real_size
          style={{
            color: "lightcoral",
          }}
        />
        <Logo_real_size
          style={{
            color: "lightsalmon",
          }}
        />
        <Logo_real_size style={{ color: "lightgoldenrodyellow" }} />
        <Logo_real_size style={{ color: "lightpink" }} />
        <Logo_real_size style={{ color: "lightsteelblue" }} />
        <Logo_real_size style={{ color: "lightseagreen" }} />
      </Div_1>

      <Div_1
        Button_2_Props={{
          onClick: scrollUp,
          Button_2_JuxSvg_0_Props: {
            style: { color: "lightseagreen" },
          },
        }}
      />

      <Div_2
        Div_1_Props={{
          Text_1_Props: {
            text: "JUX do it?",
          },
          Button_2_Props: {
            onClick: scrollUp,
            Button_2_JuxSvg_0_Props: {
              style: { color: "lightgoldenrodyellow" },
            },
          },
        }}
      />
    </main>
  );
}
