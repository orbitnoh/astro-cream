import type { MarkdownHeading } from 'astro';

export interface TocItem {
  heading: MarkdownHeading;
  children: TocItem[];
}
