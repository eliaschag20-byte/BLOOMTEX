import Reveal from './Reveal';

interface Props { eyebrow: string; title: string; lead?: string; center?: boolean }

export default function SectionHead({ eyebrow, title, lead, center }: Props) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`h2 ${center ? 'mx-auto' : ''}`}>{title}</h2>
      {lead && <p className={`lead ${center ? 'mx-auto' : ''}`}>{lead}</p>}
    </Reveal>
  );
}
