function Settings() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Configurações</h1>

      <div className="bg-white p-6 rounded shadow max-w-xl">
        <h2 className="text-lg font-semibold mb-4">
          Notificações por Email
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email de contato
            </label>
            <input
              type="email"
              placeholder="usuario@empresa.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
            <p className="text-xs text-gray-500 mt-1">
              Nunca armazenamos senhas ou dados sensíveis no frontend.
            </p>
          </div>

          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Salvar Configurações
          </button>
        </form>
      </div>
    </>
  )
}

export default Settings
