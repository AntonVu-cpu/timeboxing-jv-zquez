import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Por favor completa todos los campos')
      return
    }

    if (email === 'demo@example.com' && password === '123456') {
      // Login exitoso - redirigir al Dashboard
      navigate('/dashboard')
    } else {
      setError('Credenciales incorrectas. Usa demo@example.com / 123456')
    }
  }

  const handleRegister = () => {

    if (email && password) {
      alert('¡Registro exitoso! Serás redirigido al Dashboard.')
      navigate('/dashboard')
    } else {
      setError('Por favor completa todos los campos para registrarte')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Daily Timeboxing</h1>
        <h2>Iniciar Sesión / Registrarse</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@ejemplo.com"
              className="login-input"
            />
          </div>
          
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              className="login-input"
            />
          </div>
          
          <div className="button-group">
            <button type="submit" className="login-button">
              Iniciar Sesión
            </button>
            
            <button 
              type="button" 
              className="register-button"
              onClick={handleRegister}
            >
              Registrarse
            </button>
          </div>
        </form>
        
        <div className="demo-info">
          <p>Porfavor poner su email y contraseña y presiona "Registrarse"</p>
        </div>
      </div>
    </div>
  )
}

export default Login