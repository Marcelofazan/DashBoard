import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="p-6 bg-white rounded shadow">
      {children}
    </div>
  )
}
