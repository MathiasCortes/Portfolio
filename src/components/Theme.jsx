import React, { useState } from 'react'

export const Theme = () => {
    const [Darkmode, setDarkMode] = useState(false)
  return (
      <>
          <input
              type="checkbox"
              className="DarkMode"
              onChange={() => setDarkMode(!Darkmode)}
          />
      </>
  )
}
