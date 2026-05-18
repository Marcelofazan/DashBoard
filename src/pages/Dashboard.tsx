function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Visão Geral</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded shadow">
          <p className="text-sm text-gray-500">Usuários Ativos</p>
          <p className="text-3xl font-bold mt-2">1.599</p>
          <p className="text-green-600 text-sm mt-1">+5% hoje</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-sm text-gray-500">Vendas Hoje</p>
          <p className="text-3xl font-bold mt-2">450</p>
          <p className="text-green-600 text-sm mt-1">+12%</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-sm text-gray-500">Novos Cadastros</p>
          <p className="text-3xl font-bold mt-2">75</p>
          <p className="text-red-600 text-sm mt-1">-3%</p>
        </div>
      </div>

      {/* Status */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Status do Sistema</h2>
        <ul className="space-y-2 text-gray-700">
          <li>🟢 API: Operacional</li>
          <li>🟢 Banco de Dados: Online</li>
          <li>🟡 Serviço de Email: Latência moderada</li>
        </ul>
      </div>
    </>
  )
}

export default Dashboard
