import closeIcon from '../assets/icons/close-icon.svg';
import Button from './Button';

function ThankYouWindow({ onClick, title, desc }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-30 bg-black/40">
      <div className="bg-white pl-10 pb-10 rounded-xl max-w-120 mx-3">
        <div className="flex justify-end w-full pr-4 pt-4 opacity-30 hover:opacity-50">
          <button onClick={onClick}>
            <img src={closeIcon} alt="Close modal window" />
          </button>
        </div>
        <div className="text-2xl text-[#060b27] text-center font-bold mr-10 pt-2">
          {title}
        </div>
        <p className="mt-5 mb-10 text-center text-[#0E1330] mr-10">{desc}</p>
        <div className="flex justify-center w-full pr-10 mt-2">
          <Button
            btnText="Close"
            variant="purple"
            extraStyle="w-full"
            onClick={onClick}
            ariaLabel="Close"
          />
        </div>
      </div>
    </div>
  );
}

export default ThankYouWindow;
