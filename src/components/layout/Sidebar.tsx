import { useDashboard } from '../../context/DashboardContext'

function Sidebar() {
  const { currentPage, setCurrentPage } = useDashboard()

  const itemClass = (page: string) =>
    `cursor-pointer px-4 py-2 rounded ${
      currentPage === page
        ? 'bg-blue-600 text-white'
        : 'text-gray-300 hover:bg-gray-700'
    }`

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 space-y-2">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <div
        className={itemClass('Dashboard')}
        onClick={() => setCurrentPage('Dashboard')}
      >
        Home
      </div>

      <div
        className={itemClass('Reports')}
        onClick={() => setCurrentPage('Reports')}
      >
        Reports
      </div>

      <div
        className={itemClass('Settings')}
        onClick={() => setCurrentPage('Settings')}
      >
        Settings
      </div>
    </aside>
  )
}

export default Sidebar
