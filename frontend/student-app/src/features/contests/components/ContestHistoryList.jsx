import ContestCard from './ContestCard.jsx'

export default function ContestHistoryList({ contests }) {
  return (
    <div className="flex flex-col gap-3">
      {contests.map((c) => <ContestCard key={c.id} contest={c} />)}
    </div>
  )
}
