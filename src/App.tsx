import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'

function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<div className="flex flex-col gap-8"><h1 className="text-display-sm text-neutral-1000">Dashboard</h1><p className="text-p-md text-neutral-500">Bem-vinda de volta, Isabel! Veja como estão suas finanças hoje.</p></div>} />
                <Route path="/cartoes" element={<div className="flex flex-col gap-8"><h1 className="text-display-sm text-neutral-1000">Meus Cartões</h1><p className="text-p-md text-neutral-500">Gerencie seus cartões e limites em um só lugar.</p></div>} />
                <Route path="/transacoes" element={<div className="flex flex-col gap-8"><h1 className="text-display-sm text-neutral-1000">Transações</h1><p className="text-p-md text-neutral-500">Histórico detalhado de todas as suas movimentações.</p></div>} />
                <Route path="/metas" element={<div className="flex flex-col gap-8"><h1 className="text-display-sm text-neutral-1000">Minhas Metas</h1><p className="text-p-md text-neutral-500">Acompanhe seu progresso para realizar seus sonhos.</p></div>} />
                <Route path="/perfil" element={<div className="flex flex-col gap-8"><h1 className="text-display-sm text-neutral-1000">Meu Perfil</h1><p className="text-p-md text-neutral-500">Configurações de conta e membros da família.</p></div>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default App
