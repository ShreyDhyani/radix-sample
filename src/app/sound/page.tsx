"use client";

import { Section } from "@radix-ui/themes";
// import {  } from "@locospec/elements-react";
import { Label, Lens } from "@locospec/elements-react";
// import "../../../node_modules/@locospec/elements-react/dist/assets/main.css";
import "@locospec/elements-react/styles.css";
// import { Label } from "@locospec/blueprint-react";
import { makeServer } from "@/server/mirageServer";
import React from "react";

export default function Home() {
  const array = Array.from({ length: 100 }, (_, index) => index);

  React.useEffect(() => {
    makeServer();
  }, []);

  const [checkedIds, setCheckedIds] = React.useState([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col">
      <Section className="h-[500px]" size="1">
        <Label>Table with multiple selection</Label>
        <Lens
          selectionType={"multiple"}
          configEndpoint="/api/data-bench/test-data/config"
          dataEndpoint="/api/data-bench/test-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
        />
      </Section>
    </main>
  );
}
