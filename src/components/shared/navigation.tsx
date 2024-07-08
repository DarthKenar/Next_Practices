"use client";

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

export default function Navigation() {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button} rightIcon={<CiMenuFries />}>
            {isOpen ? "Close" : "Open"}
          </MenuButton>
          <MenuList>
            <MenuItem>
                <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem>
                <Link href="/steps">Steps</Link>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
