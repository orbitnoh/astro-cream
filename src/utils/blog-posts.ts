import type { CollectionEntry } from 'astro:content';
import archiveMarkdown from '../../blog/archive.md?raw';

type BlogPost = CollectionEntry<'blog'>;

const ARCHIVE_POST_LINK_REGEX = /^-\s+\[[^\]]+\]\(\.\/posts\/(?<slug>.+?)\.md\)/;

let inboxPostSlugs: Set<string> | null = null;

function getInboxPostSlugs(): Set<string> {
  if (inboxPostSlugs !== null) {
    return inboxPostSlugs;
  }

  const lines = archiveMarkdown.split(/\r?\n/);
  const slugs = new Set<string>();
  const inboxHeadingIndex = lines.findIndex((line) => line.trim() === `# Inbox`);

  if (inboxHeadingIndex === -1) {
    inboxPostSlugs = slugs;
    return inboxPostSlugs;
  }

  for (let i = inboxHeadingIndex + 1; i < lines.length; i++) {
    if (lines[i].startsWith('#')) {
      break;
    }

    const linkMatch = lines[i].match(ARCHIVE_POST_LINK_REGEX);

    if (linkMatch?.groups?.slug !== undefined) {
      slugs.add(linkMatch.groups.slug);
    }
  }

  inboxPostSlugs = slugs;

  return inboxPostSlugs;
}

function isInboxPost(slug: string): boolean {
  return getInboxPostSlugs().has(slug);
}

export function isPublicPost(post: BlogPost): boolean {
  if (!import.meta.env.PROD) {
    return true;
  }

  if (post.data.private) {
    return false;
  }

  if (isInboxPost(post.data.slug)) {
    return false;
  }

  return true;
}
