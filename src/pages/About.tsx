import { Flex, Heading, Text } from "@radix-ui/themes";
import { useI18n } from "@/i18n";
import { ABOUT } from "@/content/about";

export function About() {
  const { t, locale } = useI18n();
  return (
    <Flex direction="column" gap="5">
      <Heading as="h1" size="8" weight="bold" className="tracking-tight">
        {t.about.title}
      </Heading>
      {ABOUT[locale].map((para, i) => (
        <Text key={i} as="p" size="3" className="leading-relaxed text-[var(--gray-11)]">
          {para}
        </Text>
      ))}
    </Flex>
  );
}
