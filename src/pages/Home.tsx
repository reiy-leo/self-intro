import { Link as RouterLink } from "react-router";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";
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
      <Flex gap="3" wrap="wrap" pt="2">
        <Button asChild size="3" highContrast>
          <RouterLink to="/projects">
            {t.home.seeProjects}
            <ArrowRight size={16} />
          </RouterLink>
        </Button>
        <Button asChild size="3" variant="soft" color="gray">
          <RouterLink to="/about">{t.home.aboutMe}</RouterLink>
        </Button>
      </Flex>
    </Flex>
  );
}
