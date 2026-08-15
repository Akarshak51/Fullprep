import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../../../shared/components/ui/Card.jsx'

export default function EngagementChart({ data = [] }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Daily submissions</p>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#22303F" strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fill: '#5B6B7C', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#5B6B7C', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#161F2C', border: '1px solid #22303F', borderRadius: 8, fontSize: 12 }} />
            <Bar dataKey="submissions" fill="#8B7CF6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
