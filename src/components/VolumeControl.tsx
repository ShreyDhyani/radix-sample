"use client";

import { useState } from "react";
import { Card, Flex, Heading, Slider, Text } from "@radix-ui/themes";
import {
  BarChartIcon,
  SpeakerLoudIcon,
  SpeakerQuietIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/themes";

const VolumeControl = () => {
  const [volume, setVolume] = useState(50);

  return (
    <Card draggable size={"1"} className="max-w-[450px]">
      <Flex gap="7" align="center" direction={"column"}>
        <Flex
          direction={"row"}
          width={"100%"}
          justify={"between"}
          align={"baseline"}
        >
          <Heading>Volume</Heading>
          <Text>Sound Board</Text>
        </Flex>
        <Separator />
        <Flex width={"100%"} align={"center"} gap="3">
          <SpeakerQuietIcon onClick={() => setVolume((prev) => prev - 10)} />
          <Slider
            size={"3"}
            className="w-full"
            value={[volume]}
            onValueChange={(v: number[]) => {
              setVolume(v[0]);
            }}
          />
          <SpeakerLoudIcon onClick={() => setVolume((prev) => prev + 10)} />
        </Flex>
        <Flex direction={"row"}>
          <Flex>
            <VolumeAction />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

const VolumeAction = () => {
  return (
    <Flex className="cursor-pointer" width={"32"} height={"32"}>
      <BarChartIcon />
    </Flex>
  );
};

export default VolumeControl;
