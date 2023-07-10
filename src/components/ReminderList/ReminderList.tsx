import { FC } from "react";

import { Center, Container, VStack } from "@styled-system/jsx";
import {
  Table,
  TableHeaderRow,
  TableHeaderColumn,
  TableDataColumn,
  TableDataRow,
} from "~/components/atoms/Table";
import { css } from "@styled-system/css";

export const ReminderList: FC = () => {
  return (
    <Container>
      <Center>
        <VStack>
          <h1 className={css({ mt: "28px" })}>ReminderList</h1>

          <Table>
            <TableHeaderRow>
              <TableHeaderColumn>Reminder</TableHeaderColumn>
              <TableHeaderColumn>comment</TableHeaderColumn>
            </TableHeaderRow>
            <TableDataRow>
              <TableDataColumn data="test" />
              <TableDataColumn data="hellow world" />
            </TableDataRow>
            <TableDataRow>
              <TableDataColumn data="test2" />
              <TableDataColumn data="hellow world2" />
            </TableDataRow>
          </Table>
        </VStack>
      </Center>
    </Container>
  );
};
