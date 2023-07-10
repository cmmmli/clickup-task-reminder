import { styled } from "@styled-system/jsx";

import type { SystemStyleObject } from "@styled-system/types";

const rowStyle: SystemStyleObject = {
  display: "flex",
  height: "56px",

  "&:not(:last-of-type)": {
    borderBottom: "1px solid #DADADA",
  },
};

export const TableDataRow = styled("div", {
  base: {
    ...rowStyle,

    "&:hover": {
      backgroundColor: "#FAFAFA",
    },
  },
});
