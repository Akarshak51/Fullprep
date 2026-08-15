import { UploadCloud } from 'lucide-react'

export default function MediaUploader({ label = 'Upload video or thumbnail' }) {
  return (
    <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border py-8 text-ink-faint hover:border-ink-faint">
      <UploadCloud size={22} />
      <span className="text-xs">{label}</span>
      <input type="file" className="hidden" />
    </label>
  )
}
