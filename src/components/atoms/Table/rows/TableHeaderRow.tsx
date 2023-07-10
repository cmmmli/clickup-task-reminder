import { styled } from "@styled-system/jsx";
import { cva } from "@styled-system/css";

const headerRowStyle = cva({
  base: {
    display: "flex",
    height: "56px",

    "&:not(:last-of-type)": {
      borderBottom: "1px solid #DADADA",
    },
  },
});

export const TableHeaderRow = styled("div", headerRowStyle);
