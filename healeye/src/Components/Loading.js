import ClockLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const Loading = (props) => {
  const override = css`
    display: block;
    margin: 20% auto;
    transition: all 0.4s;
  `;
  return (
    <ClockLoader
      color="rgb(184, 129, 235)"
      size={60}
      loading={props.load}
      css={override}
    />
  );
};

export default Loading;
