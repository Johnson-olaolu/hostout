import NextPage from "next";
import Image from "next/image";

function NavBar() {
  return (
    <div className="nav-bar">
      <form>
        <input
          className="nav-input"
          type="text"
          placeholder="     Search events "
        ></input>
      </form>

      <ul className="ul-li">
        <li>
          <div className="nav-img">
            <Image src="/avatar.jpeg" width={50} height={50} />
          </div>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Host an Event
          </a>
        </li>
        <li>
          <a href="#" className="nav-option">
            Hangouts
          </a>
        </li>
        <li>
          <a href="#" className="nav-option">
            Trending
          </a>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
