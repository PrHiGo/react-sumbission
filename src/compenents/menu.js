import React from 'react'

export default function Menu() {
  return (
    <div
      class="offcanvas offcanvas-top menu"
      tabindex="-1"
      id="IMDbMenu"
      aria-labelledby="menuoffcanvas"
    >
      <div class="menu-header">
        <h5 class="menu-title" id="menuoffcanvas">Menu</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
    </div>
  )
}
