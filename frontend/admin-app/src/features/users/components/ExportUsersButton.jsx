import { Download } from 'lucide-react'
import Button from '../../../shared/components/ui/Button.jsx'
import { exportUsersCSV } from '../services/usersService.js'
import { useToast } from '../../../shared/hooks/useToast.js'
import { useState } from 'react'

export default function ExportUsersButton() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleExport = async () => {
    setLoading(true)
    await exportUsersCSV()
    setLoading(false)
    toast('Users exported to CSV', 'success')
  }

  return <Button variant="secondary" size="sm" icon={Download} loading={loading} onClick={handleExport}>Export CSV</Button>
}
