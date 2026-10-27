import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { CodeXml, Globe } from "lucide-react";
import type { ReactNode } from "react";
import { useI18n } from "@/i18n";
import { PROJECTS } from "@/content/projects";

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="icon-link"
    >
      {children}
    </a>
  );
}

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
      <Flex direction="column" gap="7" pt="2">
        {PROJECTS.map((p) => (
          <Flex key={p.id} direction="column" gap="2">
            <Flex align="center" gap="3" wrap="wrap">
              <Heading as="h2" size="4" weight="medium">
                {p.name ?? t.projects.names[p.id as keyof typeof t.projects.names]}
              </Heading>
              <Flex align="center" gap="1">
                {p.site && (
                  <IconLink href={p.site} label={t.projects.site}>
                    <Globe size={16} />
                  </IconLink>
                )}
                {p.repo && (
                  <IconLink href={p.repo} label={t.projects.source}>
                    <CodeXml size={16} />
                  </IconLink>
                )}
              </Flex>
            </Flex>
            <Text as="p" size="3" color="gray" className="leading-relaxed">
              {t.projects.summaries[p.id]}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
