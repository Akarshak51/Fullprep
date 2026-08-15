export default function EditorialEditor({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Write the editorial explanation…"
      className="h-32 w-full resize-none rounded-lg border border-border bg-bg-raised p-3 text-sm text-ink placeholder:text-ink-faint focus-ring focus:border-brand/60"
    />
  )
}
