function Button({ btnText, variant, extraStyle, href, onClick, ariaLabel }) {
  const btnStyle = {
    purple: 'bg-[#7214FF] text-white',
    transparent:
      'bg-gradient-to-br from-[#151934]/52 via-[#151934]/8 to-[#151934]/49 text-white border border-[#282D45]',
  };

  return href ? (
    <a
      href={href}
      className={`${btnStyle[variant]} flex justify-center items-center w-full sm:w-45 h-11 px-6 py-2 rounded-4xl cursor-pointer transition-all duration-200 ease-out hover:shadow-lg hover:shadow-[#7214FF]/20 hover:-translate-y-px active:translate-y-px ${extraStyle}`}
    >
      {btnText}
    </a>
  ) : (
    <button
      type="submit"
      onClick={onClick}
      className={`${btnStyle[variant]} flex justify-center items-center w-full sm:w-45 h-11 px-6 py-4 rounded-4xl cursor-pointer transition-all duration-200 ease-out hover:shadow-lg hover:shadow-[#7214FF]/20 hover:-translate-y-px active:translate-y-px ${extraStyle}`}
      aria-label={ariaLabel}
    >
      {btnText}
    </button>
  );
}

export default Button;
