import { Loader2 } from 'lucide-react'
import clsx from 'clsx'

export default function Spinner({ size = 20, className }) {
  return <Loader2 size={size} className={clsx('animate-spin text-brand', className)} />
}
