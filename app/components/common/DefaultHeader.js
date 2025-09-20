import Link from "next/link";
import MainMenu from "./MainMenu";
import Image from "next/image";

const DefaultHeader = () => {
  return (
    <header className="header-nav menu_style_home_one home3_style main-menu">
      {/* Ace Responsive Menu */}
      <nav>
        <div className="container posr">
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
              height={100}
              priority
              src="/images/logoBlack.svg"
              alt="brand"
            />
          </Link>
          {/* Responsive Menu Structure*/}
          <ul
            // id="respMenu"
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

export default DefaultHeader;
