import { useCallback, useEffect, useState } from "react";
import { AlertDialog, Box, Button, Callout, Dialog, Flex, Heading, IconButton, Link, Separator, Text, TextArea, TextField } from "@radix-ui/themes";
import { ArrowUpRight, LogIn, LogOut, MousePointerClick, Pencil, Plus, Trash2, TriangleAlert, X } from "lucide-react";
import { useI18n } from "@/i18n";

type Invite = { id: string; title: string; url: string; intro: string; clicks: number };
type User = { email: string; name?: string } | null;
type Draft = { id?: string; title: string; url: string; intro: string };

const host = (u: string) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return u;
  }
};

/** 进页面就抹掉 ?login_error，避免刷新或分享时一直带着。 */
function takeLoginError(): string | null {
  const url = new URL(window.location.href);
  const err = url.searchParams.get("login_error");
  if (err) {
    url.searchParams.delete("login_error");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
  return err;
}

export function Invites() {
  const { t } = useI18n();
  const s = t.invites;
  const [invites, setInvites] = useState<Invite[] | null>(null);
  const [user, setUser] = useState<User>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(takeLoginError);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const r = await fetch("/api/invites");
      if (!r.ok) throw new Error(String(r.status));
      setInvites(((await r.json()) as { invites: Invite[] }).invites);
    } catch {
      setLoadFailed(true);
    }
  }, []);

  useEffect(() => {
    load();
    fetch("/api/me")
      .then((r) => (r.ok ? r.json() : { user: null }))
      .then((d: { user: User }) => {
        setUser(d.user);
        if (d.user) setLoginError(null);
      })
      .catch(() => {});
  }, [load]);

  const save = async () => {
    if (!draft) return;
    setSaving(true);
    setSaveError(null);
    const r = await fetch(draft.id ? `/api/invites/${draft.id}` : "/api/invites", {
      method: draft.id ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: draft.title, url: draft.url, intro: draft.intro }),
    }).catch(() => null);
    setSaving(false);
    if (!r || !r.ok) {
      const msg = r ? ((await r.json().catch(() => ({}))) as { error?: string }).error ?? String(r.status) : "network";
      setSaveError(s.saveFailed + msg);
      return;
    }
    setDraft(null);
    load();
  };

  const remove = async (id: string) => {
    await fetch(`/api/invites/${id}`, { method: "DELETE" }).catch(() => null);
    load();
  };

  const loginMessage =
    loginError === "forbidden" ? s.loginForbidden : loginError === "unconfigured" ? s.loginUnconfigured : loginError ? s.loginFailed : null;

  return (
    <Flex direction="column" gap="6">
      <Flex direction="column" gap="3">
        <Flex align="center" justify="between" gap="3">
          <Heading as="h1" size="8" weight="bold" className="tracking-tight">
            {s.title}
          </Heading>
          {user && (
            <Button size="2" highContrast onClick={() => { setSaveError(null); setDraft({ title: "", url: "", intro: "" }); }}>
              <Plus size={16} />
              {s.add}
            </Button>
          )}
        </Flex>
        <Text as="p" size="3" color="gray" className="max-w-[34em] leading-relaxed">
          {s.lead}
        </Text>
      </Flex>

      {loginMessage && (
        <Callout.Root color="red" variant="surface">
          <Callout.Icon>
            <TriangleAlert size={16} />
          </Callout.Icon>
          <Flex align="center" justify="between" gap="3" width="100%">
            <Callout.Text>{loginMessage}</Callout.Text>
            <IconButton size="1" variant="ghost" color="gray" aria-label={s.cancel} onClick={() => setLoginError(null)}>
              <X size={14} />
            </IconButton>
          </Flex>
        </Callout.Root>
      )}

      {loadFailed ? (
        <Text color="gray">{s.loadFailed}</Text>
      ) : invites === null ? null : invites.length === 0 ? (
        <Text color="gray">{s.empty}</Text>
      ) : (
        <Flex direction="column">
          {invites.map((inv, i) => (
            <Box key={inv.id}>
              {i > 0 && <Separator size="4" />}
              <Flex gap="4" py="4" align="start" justify="between">
                <Flex direction="column" gap="1" minWidth="0">
                  <Link href={`/go/${inv.id}`} target="_blank" rel="noopener" size="4" weight="medium" highContrast underline="hover">
                    <Flex align="center" gap="1">
                      {inv.title}
                      <ArrowUpRight size={16} />
                    </Flex>
                  </Link>
                  {inv.intro && (
                    <Text size="2" className="leading-relaxed text-[var(--gray-11)]">
                      {inv.intro}
                    </Text>
                  )}
                  <Flex align="center" gap="3" pt="1">
                    <Text size="1" color="gray">{host(inv.url)}</Text>
                    <Flex align="center" gap="1">
                      <MousePointerClick size={12} className="text-[var(--gray-10)]" />
                      <Text size="1" color="gray">{s.clicks.replace("{n}", String(inv.clicks))}</Text>
                    </Flex>
                  </Flex>
                </Flex>
                {user && (
                  <Flex gap="3" pt="1" flexShrink="0">
                    <IconButton size="1" variant="ghost" color="gray" aria-label={s.edit} onClick={() => { setSaveError(null); setDraft({ id: inv.id, title: inv.title, url: inv.url, intro: inv.intro }); }}>
                      <Pencil size={14} />
                    </IconButton>
                    <AlertDialog.Root>
                      <AlertDialog.Trigger>
                        <IconButton size="1" variant="ghost" color="gray" aria-label={s.delete}>
                          <Trash2 size={14} />
                        </IconButton>
                      </AlertDialog.Trigger>
                      <AlertDialog.Content maxWidth="400px">
                        <AlertDialog.Title>{s.confirmDelete}</AlertDialog.Title>
                        <AlertDialog.Description size="2" color="gray">{inv.title}</AlertDialog.Description>
                        <Flex gap="3" mt="4" justify="end">
                          <AlertDialog.Cancel>
                            <Button variant="soft" color="gray">{s.cancel}</Button>
                          </AlertDialog.Cancel>
                          <AlertDialog.Action>
                            <Button color="red" onClick={() => remove(inv.id)}>{s.delete}</Button>
                          </AlertDialog.Action>
                        </Flex>
                      </AlertDialog.Content>
                    </AlertDialog.Root>
                  </Flex>
                )}
              </Flex>
            </Box>
          ))}
        </Flex>
      )}

      <Flex pt="4">
        {user ? (
          <Flex align="center" gap="3" wrap="wrap">
            <Text size="1" color="gray">{s.signedIn.replace("{email}", user.email)}</Text>
            <form method="post" action="/auth/logout" className="m-0">
              <Button type="submit" size="1" variant="ghost" color="gray">
                <LogOut size={12} />
                {s.logout}
              </Button>
            </form>
          </Flex>
        ) : (
          <Button asChild size="1" variant="ghost" color="gray">
            <a href="/auth/login?returnTo=/invites">
              <LogIn size={12} />
              {s.login}
            </a>
          </Button>
        )}
      </Flex>

      <Dialog.Root open={draft !== null} onOpenChange={(o) => !o && setDraft(null)}>
        <Dialog.Content maxWidth="480px">
          <Dialog.Title>{draft?.id ? s.edit : s.add}</Dialog.Title>
          {draft && (
            <Flex direction="column" gap="3" mt="2">
              <label>
                <Text as="div" size="2" mb="1" weight="medium">{s.fieldTitle}</Text>
                <TextField.Root value={draft.title} maxLength={80} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="medium">{s.fieldUrl}</Text>
                <TextField.Root type="url" placeholder="https://" value={draft.url} onChange={(e) => setDraft({ ...draft, url: e.target.value })} />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="medium">{s.fieldIntro}</Text>
                <TextArea rows={3} maxLength={300} value={draft.intro} onChange={(e) => setDraft({ ...draft, intro: e.target.value })} />
              </label>
              {saveError && <Text size="2" color="red">{saveError}</Text>}
              <Flex gap="3" mt="2" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">{s.cancel}</Button>
                </Dialog.Close>
                <Button highContrast loading={saving} disabled={!draft.title.trim() || !draft.url.trim()} onClick={save}>
                  {s.save}
                </Button>
              </Flex>
            </Flex>
          )}
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
}
