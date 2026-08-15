import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../../../shared/components/ui/Card.jsx'

export default function GrowthChart({ data = [] }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">User growth (12 months)</p>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2FD1A6" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#2FD1A6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#22303F" strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fill: '#5B6B7C', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#5B6B7C', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#161F2C', border: '1px solid #22303F', borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="users" stroke="#2FD1A6" strokeWidth={2} fill="url(#growthFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
