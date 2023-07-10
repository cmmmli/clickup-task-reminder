import { FC, ReactNode } from "react";
import { Box, Flex, HStack } from "@styled-system/jsx";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuTrigger,
  Portal,
} from "@ark-ui/react";

type Props = {
  children: ReactNode;
};

export const Navbar: FC<Props> = ({ children }) => {
  return (
    <>
      <Box bg={"gray.100"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack gap={8} alignItems={"center"}>
            <Box>Logo</Box>
          </HStack>
          <Menu>
            <MenuTrigger>
              <Box>Komori</Box>
            </MenuTrigger>
            <Portal>
              <MenuPositioner>
                <MenuContent>
                  <MenuItem id="1">Hoge</MenuItem>
                </MenuContent>
              </MenuPositioner>
            </Portal>
          </Menu>
        </Flex>
      </Box>

      {children}
    </>
  );
};
