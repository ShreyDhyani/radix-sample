import { Flex, Heading, ScrollArea, Grid, TabNav } from "@radix-ui/themes";
import ProfileIcon from "@/components/ProfileIcon";
import CardComponent from "@/components/Card";
import VolumeControl from "@/components/VolumeControl";
import { Separator } from "@locoui/react";

export default function Home() {
  const array = Array.from({ length: 100 }, (_, index) => index);

  return (
    <main className="w-full h-screen flex flex-col">
      <ScrollArea className="py-4 px-4" size={"1"}>
        <VolumeControl />
        <label htmlFor="sample"></label>
      </ScrollArea>
    </main>
  );
}
