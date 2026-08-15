import clsx from 'clsx'

export default function PageContainer({ children, className }) {
  return <div className={clsx('container-page py-8', className)}>{children}</div>
}
