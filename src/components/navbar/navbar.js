import React from "react";
import jordan from "../../imas/jordan.png";
import converse from "../../imas/Converse-logo.jpg";

function NavBar() {
  return (
    <div>
        <img id='jordan' src={jordan}></img>
        <img id ='converse' src={converse}></img>
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>
    </div>
  );
}

export default NavBar;