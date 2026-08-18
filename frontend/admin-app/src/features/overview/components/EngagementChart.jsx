import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../../../shared/components/ui/Card.jsx'

export default function EngagementChart({ data = [] }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Daily submissions</p>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="rgb(var(--color-border))" strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fill: 'rgb(var(--color-ink-faint))', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'rgb(var(--color-ink-faint))', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: 'rgb(var(--color-bg-raised))', border: '1px solid rgb(var(--color-border))', borderRadius: 8, fontSize: 12 }} />
            <Bar dataKey="submissions" fill="#8B7CF6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
