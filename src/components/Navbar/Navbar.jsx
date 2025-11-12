import MobileNav from "../Navbar/MobileNav";
import DesktopNav from "../Navbar/DesktopNav";

const Navbar = () => {
  return (
    <nav>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </nav>
  );
};

export default Navbar;
