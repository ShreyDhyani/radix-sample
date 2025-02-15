import { ScrollArea, Section } from "@radix-ui/themes";
import Button from "@/components/Button";
import RadixButton from "@/components/RadixButton";

export default function Page() {
  return (
    <main className="w-full h-screen flex flex-col space-y-10 max-w-3xl px-4 mx-auto pt-10 pb-5">
      <Section
        size="4"
        className="bg-gray-50 border-2 border-gray-300 rounded-lg flex gap-x-4 justify-evenly items-center"
      >
        <Button label="sample" size="1" />
        <Button label="sample" size="2" />
        <Button label="sample" size="3" />
        <Button label="sample" size="4" />
        <Button label="sample" size="5" />
      </Section>
      <Section
        size="4"
        className="bg-gray-50 border-2 border-gray-300 rounded-lg flex gap-x-4 justify-evenly items-center"
      >
        <Button label="sample" varient="soft" size="1" />
        <Button label="sample" varient="soft" size="2" />
        <Button label="sample" varient="soft" size="3" />
        <Button label="sample" varient="soft" size="4" />
        <Button label="sample" varient="soft" size="5" />
      </Section>
      <Section
        size="4"
        className="bg-gray-50 border-2 border-gray-300 rounded-lg flex gap-x-4 justify-evenly items-center"
      >
        <Button label="sample" varient="ghost" size="1" />
        <Button label="sample" varient="ghost" size="2" />
        <Button label="sample" varient="ghost" size="3" />
        <Button label="sample" varient="ghost" size="4" />
        <Button label="sample" varient="ghost" size="5" />
      </Section>
      <Section
        size="4"
        className="bg-gray-50 border-2 border-gray-300 rounded-lg flex gap-x-4 justify-evenly items-center"
      >
        <Button label="sample" varient="outline" size="1" />
        <Button label="sample" varient="outline" size="2" />
        <Button label="sample" varient="outline" size="3" />
        <Button label="sample" varient="outline" size="4" />
        <Button label="sample" varient="outline" size="5" />
      </Section>
      <Section
        size="4"
        className="bg-gray-50 border-2 border-gray-300 rounded-lg flex gap-x-4 justify-evenly items-center"
      >
        <Button label="sample" varient="classic" size="1" />
        <Button label="sample" varient="classic" size="2" />
        <Button label="sample" varient="classic" size="3" />
        <Button label="sample" varient="classic" size="4" />
        <Button label="sample" varient="classic" size="5" />
      </Section>
      {/* </ScrollArea> */}
    </main>
  );
}
