const reports = [
  { id: 1, name: 'Relatório de Vendas', date: '2026-01-20', status: 'Concluído' },
  { id: 2, name: 'Atividade de Usuários', date: '2026-01-18', status: 'Concluído' },
  { id: 3, name: 'Performance do Sistema', date: '2026-01-15', status: 'Em análise' },
  { id: 4, name: 'Relatório Git', date: '2026-05-18', status: 'Em análise' }
]

function Reports() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Relatórios</h1>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-3">Nome</th>
              <th className="p-3">Data</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id} className="border-t">
                <td className="p-3">{report.name}</td>
                <td className="p-3">{report.date}</td>
                <td className="p-3">
                  <span className={
                    report.status === 'Concluído'
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }>
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Reports
