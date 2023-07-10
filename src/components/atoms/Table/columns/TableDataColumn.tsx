import { FC } from "react";
import { styled } from "@styled-system/jsx";
import { SystemStyleObject } from "@styled-system/types";

const columnStyle: SystemStyleObject = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  minWidth: "150px",
  height: "100%",
  color: "#282828",
  padding: "0 14px",
  wordBreak: "break-all",
};

const StyledDataColumn = styled("div", {
  base: {
    ...columnStyle,
    justifyContent: "center",
    fontSize: "13px",
    lineHeight: "16px",
    letterSpacing: "0.06em",
  },
});

type Props = {
  data: string;
};

export const TableDataColumn: FC<Props> = ({ data }) => {
  return <StyledDataColumn>{data}</StyledDataColumn>;
};
