import { Box, Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";
import { ArrowUpRight, Code } from "lucide-react";
import { Fragment } from "react";
import { useI18n } from "@/i18n";
import { PROJECTS } from "@/content/projects";

export function Projects() {
  const { t } = useI18n();
  return (
    <Flex direction="column" gap="6">
      <Box>
        <Heading as="h1" size="8" weight="bold" className="tracking-tight">
          {t.projects.title}
        </Heading>
        <Text as="p" size="3" color="gray" mt="3">
          {t.projects.lead}
        </Text>
      </Box>
      <Flex direction="column">
        {PROJECTS.map((p, i) => (
          <Fragment key={p.id}>
            {i > 0 && <Separator size="4" />}
            <Flex direction="column" gap="2" py="5">
              <Heading as="h2" size="4" weight="medium">
                {p.name ?? t.projects.names[p.id as keyof typeof t.projects.names]}
              </Heading>
              <Text as="p" size="3" color="gray" className="leading-relaxed">
                {t.projects.summaries[p.id]}
              </Text>
              <Flex gap="4" pt="1">
                {p.site && (
                  <Link href={p.site} target="_blank" rel="noreferrer" size="2" color="gray" highContrast underline="hover">
                    <Flex align="center" gap="1">
                      {t.projects.site}
                      <ArrowUpRight size={14} />
                    </Flex>
                  </Link>
                )}
                {p.repo && (
                  <Link href={p.repo} target="_blank" rel="noreferrer" size="2" color="gray" highContrast underline="hover">
                    <Flex align="center" gap="1">
                      <Code size={14} />
                      {t.projects.source}
                    </Flex>
                  </Link>
                )}
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Flex>
    </Flex>
  );
}
