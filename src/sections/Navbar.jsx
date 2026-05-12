import logo from '../assets/icons/logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import Button from '../components/Button';
import Menu from '../components/Menu';

function Navbar({ setIsBurger }) {
  return (
    <header className="sticky top-0 z-1000 w-full py-6 px-3 md:px-5 bg-[#060b27]/30">
      <div className="w-full flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="OptiAds" />
        </a>
        <Menu extraStyle="flex-between gap-7 hidden lg:flex" />

        <button onClick={() => setIsBurger(true)} className="lg:hidden flex">
          <img src={menuIcon} alt="Open menu" />
        </button>
        <Button
          btnText="Request demo"
          variant="purple"
          href="#pricing"
          extraStyle="hidden lg:flex"
        />
      </div>
    </header>
  );
}

export default Navbar;
