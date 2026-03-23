import closeMenu from '../assets/icons/close-icon.svg';
import Menu from './Menu';
import Button from './Button';

function Burger({ setIsBurger, isBurger }) {
  return (
    <div
      className={`fixed inset-0 flex justify-end z-1200 transition-opacity duration-500 ease-out
      ${isBurger ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      bg-black/40`}
      onClick={() => setIsBurger(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-80 bg-[#0E1330] h-screen overflow-y-auto pl-10 pt-2 pr-2 transform transition-transform duration-300 ease-in-out ${isBurger ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col justify-start">
          <button
            onClick={() => setIsBurger(false)}
            className="w-full flex justify-end cursor-pointer"
          >
            <img src={closeMenu} alt="Close menu" />
          </button>
          <span className="text-xl text-white font-bold">Menu</span>

          <Menu
            extraStyle="flex-col gap-3 mt-5 mb-10"
            onClick={() => setIsBurger(false)}
          />
          <div className="mr-10" onClick={() => setIsBurger(false)}>
            <Button btnText="Request demo" variant="purple" href="#pricing" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Burger;
