"use client";

import { Flex, Heading, TabNav } from "@radix-ui/themes";
import ProfileIcon from "@/components/ProfileIcon";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();

  return (
    <Flex gap="1" className="px-4 py-2 border-b !justify-between items-center">
      <Heading>Radix UI</Heading>
      <TabNav.Root>
        <TabNav.Link href="/" active={pathname === "/"}>
          Home
        </TabNav.Link>
        <TabNav.Link href="/sound" active={pathname === "/sound"}>
          Sound
        </TabNav.Link>
      </TabNav.Root>
      <ProfileIcon />
    </Flex>
  );
};

export default TopBar;
