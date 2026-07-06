import Link from '@/components/ui/Link';

// Minimal inline formatter so content can live in plain JSON.
// Supports:  **bold**  and  [label](url)
// Returns an array of React nodes. Links use the shared <Link> (terracotta).
export function renderRichText(input) {
  if (!input) return null;

  const nodes = [];
  let key = 0;
  // Match either [label](url) or **bold**
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(input)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(input.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      // [label](url)
      nodes.push(
        <Link key={`l${key++}`} href={match[2]} className="font-medium">
          {match[1]}
        </Link>
      );
    } else if (match[3] !== undefined) {
      // **bold**
      nodes.push(
        <strong key={`b${key++}`} className="font-semibold text-ink">
          {match[3]}
        </strong>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < input.length) {
    nodes.push(input.slice(lastIndex));
  }

  return nodes;
}
