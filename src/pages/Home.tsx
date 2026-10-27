import { Badge, Flex, Heading, Text } from "@radix-ui/themes";
import { useI18n } from "@/i18n";

export function Home() {
  const { t } = useI18n();
  return (
    <Flex direction="column" gap="6">
      <Heading as="h1" size={{ initial: "8", sm: "9" }} weight="bold" className="tracking-tight">
        {t.home.greeting}
      </Heading>
      <Text as="p" size={{ initial: "4", sm: "5" }} color="gray" className="max-w-[34em] leading-relaxed">
        {t.home.intro}
      </Text>
      <Flex gap="2" wrap="wrap" className="max-w-[40em]">
        {t.about.roles.map((r) => (
          <Badge key={r.name} size="2" variant="soft" color="gray" radius="full">
            {r.name}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
}
