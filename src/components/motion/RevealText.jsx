export function RevealText({ text, as: Tag = 'span', className }) {
  return <Tag className={className}>{text}</Tag>;
}
