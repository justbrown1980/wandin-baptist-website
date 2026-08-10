import Markdoc from '@markdoc/markdoc';

type MarkdocContent = () => Promise<unknown>;

function getNode(doc: unknown) {
  if (doc && typeof doc === 'object' && 'node' in doc) {
    return (doc as { node: unknown }).node;
  }
  return doc;
}

export async function markdocToHtml(content: MarkdocContent | null | undefined) {
  if (!content) return '';
  const doc = await content();
  const node = getNode(doc);
  // @ts-expect-error Markdoc node typing varies by package version
  const transformed = Markdoc.transform(node);
  return Markdoc.renderers.html(transformed);
}
