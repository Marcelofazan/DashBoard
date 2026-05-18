import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import { useDashboard } from './context/DashboardContext'

function App() {
  const { currentPage } = useDashboard()

  function renderPage() {
    if (currentPage === 'Dashboard') return <Dashboard />
    if (currentPage === 'Reports') return <Reports />
    if (currentPage === 'Settings') return <Settings />
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="p-6 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}

export default App
