import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import { RichNote } from "@/components/RichNote";

export function About() {
  const { t } = useI18n();
  const a = t.about;
  return (
    <Flex direction="column" gap="6">
      <Heading as="h1" size="8" weight="bold" className="tracking-tight">
        {a.title}
      </Heading>
      <Flex direction="column" gap="3">
        {a.paragraphs.map((p, i) => (
          <Text key={i} as="p" size={i === 0 ? "4" : "3"} className={`max-w-[34em] leading-relaxed ${i === 0 ? "" : "text-[var(--gray-11)]"}`}>
            {p}
          </Text>
        ))}
      </Flex>

      <RichNote source={a.hats} />

      <Box>
        <Link href="mailto:hi@rei8t.dev" size="3" color="gray" highContrast underline="hover">
          <Flex align="center" gap="2">
            <Mail size={16} />
            {a.contact}
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
}
