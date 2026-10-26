import { NavLink, Outlet } from "react-router";
import { Box, Container, DropdownMenu, Flex, IconButton, Separator, Text } from "@radix-ui/themes";
import { Check, Globe } from "lucide-react";
import { useI18n } from "@/i18n";
import { LOCALES } from "@/i18n/locales";
import { cn } from "@/lib/utils";

function NavItem({ to, children }: { to: string; children: string }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        cn(
          "no-underline transition-colors",
          isActive ? "text-[var(--gray-12)]" : "text-[var(--gray-10)] hover:text-[var(--gray-12)]",
        )
      }
    >
      <Text size="2" weight="medium">
        {children}
      </Text>
    </NavLink>
  );
}

function LanguageMenu() {
  const { locale, setLocale, t } = useI18n();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost" color="gray" aria-label={t.language}>
          <Globe size={16} strokeWidth={1.75} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" size="1">
        {LOCALES.map((l) => (
          <DropdownMenu.Item key={l.code} onSelect={() => setLocale(l.code)}>
            <Flex align="center" justify="between" gap="4" width="100%">
              <span lang={l.htmlLang}>{l.label}</span>
              {l.code === locale && <Check size={14} />}
            </Flex>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export function Layout() {
  const { t } = useI18n();
  return (
    <Flex direction="column" minHeight="100vh">
      <Container size="2" px={{ initial: "5", sm: "6" }}>
        <Flex asChild align="center" justify="between" py="5">
          <header>
            <NavLink to="/" className="no-underline text-[var(--gray-12)]">
              <Text size="3" weight="bold" className="tracking-tight">
                Rei
              </Text>
            </NavLink>
            <Flex asChild align="center" gap={{ initial: "4", sm: "5" }}>
              <nav>
                <NavItem to="/">{t.nav.home}</NavItem>
                <NavItem to="/projects">{t.nav.projects}</NavItem>
                <NavItem to="/invites">{t.nav.invites}</NavItem>
                <NavItem to="/about">{t.nav.about}</NavItem>
                <LanguageMenu />
              </nav>
            </Flex>
          </header>
        </Flex>
      </Container>

      <Box asChild flexGrow="1">
        <main>
          <Container size="2" px={{ initial: "5", sm: "6" }} py={{ initial: "7", sm: "9" }}>
            <Outlet />
          </Container>
        </main>
      </Box>

      <Container size="2" px={{ initial: "5", sm: "6" }}>
        <Separator size="4" />
        <Flex asChild justify="between" wrap="wrap" gap="2" py="5">
          <footer>
            <Text size="1" color="gray">
              © {new Date().getFullYear()} Rei
            </Text>
            <Text size="1" color="gray">
              <a href="https://github.com/reiy-leo/self-intro" className="underline-offset-4 hover:underline">
                {t.footer.license}
              </a>
            </Text>
          </footer>
        </Flex>
      </Container>
    </Flex>
  );
}
