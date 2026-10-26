import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";

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

      <Box>
        <Text as="p" size="2" color="gray" mb="3">
          {a.rolesTitle}
        </Text>
        <dl className="m-0 grid gap-x-8 gap-y-4 sm:grid-cols-[minmax(9rem,max-content)_1fr]">
          {a.roles.map((r) => (
            <div key={r.name} className="contents">
              <dt>
                <Text size="3" weight="medium">
                  {r.name}
                </Text>
              </dt>
              <dd className="m-0 -mt-3 sm:mt-0">
                <Text size="3" className="leading-relaxed text-[var(--gray-11)]">
                  {r.desc}
                </Text>
              </dd>
            </div>
          ))}
        </dl>
      </Box>

      <Box>
        <Link href="https://github.com/reiy-leo" target="_blank" rel="noreferrer" size="3" color="gray" highContrast underline="hover">
          <Flex align="center" gap="1">
            {a.github}
            <ArrowUpRight size={16} />
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
}
