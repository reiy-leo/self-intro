import { Link as RouterLink } from "react-router";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useI18n } from "@/i18n";

export function NotFound() {
  const { t } = useI18n();
  return (
    <Flex direction="column" gap="5" align="start">
      <Heading as="h1" size="8" weight="bold">
        {t.notFound.title}
      </Heading>
      <Button asChild variant="soft" color="gray">
        <RouterLink to="/">{t.notFound.back}</RouterLink>
      </Button>
    </Flex>
  );
}
