import { renderRichText } from '@/lib/richText';

// Renders a mini-markdown string (**bold**, [label](url)) into an element.
export default function RichText({ children, as: As = 'p', className = '' }) {
  return <As className={className}>{renderRichText(children)}</As>;
}
