export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider__label">{label}</span>
      <div className="section-divider__line" />
    </div>
  );
}
