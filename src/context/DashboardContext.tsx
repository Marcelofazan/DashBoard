import { createContext, useContext, useState, type ReactNode } from 'react'

type Page = 'Dashboard' | 'Reports' | 'Settings'

type DashboardContextType = {
  currentPage: Page
  setCurrentPage: (page: Page) => void
}

const DashboardContext = createContext<DashboardContextType | null>(null)

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('Dashboard')

  return (
    <DashboardContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider')
  }
  return context
}
