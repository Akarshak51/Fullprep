import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../../../shared/components/ui/Card.jsx'

export default function ContestRatingChart({ history = [] }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Contest rating</p>
      <div className="mt-3 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history}>
            <CartesianGrid stroke="#22303F" strokeDasharray="3 3" />
            <XAxis dataKey="contest" tick={{ fill: '#5B6B7C', fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#5B6B7C', fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#161F2C', border: '1px solid #22303F', borderRadius: 8, fontSize: 12 }} />
            <Line type="monotone" dataKey="rating" stroke="#2FD1A6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
