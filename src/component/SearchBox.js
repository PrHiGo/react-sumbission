import search_icon from "../assets/svg/search_icon.svg";
import { useState } from "react";

export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)

  };

  return (
    <div className="search-container">
      <input className="searchbar" type="text" placeholder="Search IMDb..." onClick={handleOpen} />
      {open ? (
        <div className="searched-movies">
          <ul>
            <li>
              Bild
            </li>
            <li>
              Title
            </li>
          </ul>
        </div>
      ) : null}
      <button className="btn-search">
        <img src={search_icon} alt="search icon" />
      </button>
    </div>
  )
}
