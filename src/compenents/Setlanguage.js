import React, { useState } from 'react'

export default function SetLanguage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown">
      <button onClick={handleOpen}>EN</button>
      {open ? (<ul><li>SV</li><li>EN</li></ul>) : (null)}
    </div>
  )
}