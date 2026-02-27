import { useNavigate } from 'react-router-dom'
import './App.css'

function Dashboard() {
    const navigate = useNavigate()

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>

            <div className="dashboard-content">
                <button onClick={() => navigate('/planner')}>
                    Ir al Planner
                </button>      </div>
        </div>
    )
}

export default Dashboard