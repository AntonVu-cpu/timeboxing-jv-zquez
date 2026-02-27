import { useState } from 'react'
import "./App.css";

function App() {

  return (
    <div className='content'>
      <h1>Daily Timeboxing</h1>

      <div className="date-section">
        <h2>Planner</h2>
        <span className="date-label">Date:</span>
        <div className="date-inputs">
          <input type="text" maxLength="4" className="date-box" /> /
          <input type="text" maxLength="2" className="date-box" /> /
          <input type="text" maxLength="2" className="date-box" />
        </div>
      </div>

      <div className="main-content">
        <div className="left-section">
          <h2 className="priorities-title">Top Priorities</h2>
          <div className="priorities-inputs">
            <input type="text" className="date-box" />
            <input type="text" className="date-box" />
            <input type="text" className="date-box" />
          </div>

          <div className="brain-dump-section">
            <h2 className="section-title">Brain Dump</h2>
            <div className="brain-inputs">
              <textarea className="brain-box" rows="10" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="time-table">
            <table>
              <thead>
                <tr>
                  <th>Numero</th>
                  <th>:00</th>
                  <th>:30</th>
                </tr>
              </thead>
              <tbody>
                {[
                  '5', '6', '7', '8', '9', '10', '11',
                  '12', '1', '2', '3', '4', '5', '6',
                  '7', '8', '9', '10', '11'
                ].map((time, index) => (
                  <tr key={index}>
                    <td className="time-cell">{time}</td>
                    <td className="activity-cell">
                      <input type="text" className="time-input"/>
                    </td>
                    <td className="activity-cell"> 
                      <input type="text" className="time-input"/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
