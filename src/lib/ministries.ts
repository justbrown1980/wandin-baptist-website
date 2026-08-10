import { getReader } from './reader';
import { markdocToHtml } from './markdoc';

export type Ministry = {
  title: string;
  schedule?: string | null;
  order: number;
  descriptionHtml: string;
};

export async function getMinistries(): Promise<Ministry[]> {
  const reader = getReader();
  const slugs = await reader.collections.ministries.list();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await reader.collections.ministries.read(slug);
      if (!entry) return null;
      return {
        title: entry.title,
        schedule: entry.schedule,
        order: entry.order ?? 0,
        descriptionHtml: await markdocToHtml(entry.description),
      };
    }),
  );

  return entries
    .filter((item): item is Ministry => item !== null)
    .sort((a, b) => a.order - b.order);
}
