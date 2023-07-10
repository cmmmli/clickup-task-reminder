import { styled } from "@styled-system/jsx";
import { FC, ReactNode } from "react";
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

const StyledHeaderColumn = styled("div", {
  base: {
    ...columnStyle,
    position: "relative",
    justifyContent: "center",
    fontSize: "12px",
    lineHeight: "17px",
    fontWeight: { base: "500", _hover: "700" },
  },
});

type Props = {
  children: ReactNode;
};

export const TableHeaderColumn: FC<Props> = ({ children }) => {
  return <StyledHeaderColumn>{children}</StyledHeaderColumn>;
};
