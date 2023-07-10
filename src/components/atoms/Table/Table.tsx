import { styled } from "@styled-system/jsx";

export const Table = styled("div", {
  base: {
    display: "grid",
    gridAutoFlow: "row",
    width: "100%",
    maxHeight: `${56 * 12}px`,
    overflow: "auto",
    my: "16px",
  },
});
