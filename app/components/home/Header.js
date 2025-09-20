import Link from "next/link";
import MainMenu from "../common/MainMenu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header-nav menu_style_home_one home2_style main-menu">
      {/* Ace Responsive Menu */}
      <nav>
        <div className="container-fluid posr">
          {/* Menu Toggle btn*/}
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <Link href="/">
            <Image
              width={350}
              height={150}
              priority
              src="/images/logoBlack.svg"
              alt="brand"
            />
          </Link>
          {/* Responsive Menu Structure*/}
          <ul
            id="respMenu"
            className="ace-responsive-menu text-end"
            data-menu-style="horizontal"
          >
            <MainMenu />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
