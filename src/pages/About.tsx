import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <Flex direction="column" gap="5">
      <Heading as="h1" size="8" weight="bold" className="tracking-tight">
        {t.about.title}
      </Heading>
      {t.about.paragraphs.map((para, i) => (
        <Text key={i} as="p" size="3" className="max-w-[36em] leading-relaxed text-[var(--gray-11)]">
          {para}
        </Text>
      ))}
      <Box pt="2">
        <Link href="https://github.com/reiy-leo" target="_blank" rel="noreferrer" size="3" color="gray" highContrast underline="hover">
          <Flex align="center" gap="1">
            {t.about.github}
            <ArrowUpRight size={16} />
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
}
