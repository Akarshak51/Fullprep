import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import Card from '../../../shared/components/ui/Card.jsx'

const COLORS = ['#2FD1A6', '#8B7CF6', '#F5B342', '#F0654C']

export default function LanguageDistributionChart({ data = [] }) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-muted">Language distribution</p>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
              {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ background: '#161F2C', border: '1px solid #22303F', borderRadius: 8, fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12, color: '#8B9AAB' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
