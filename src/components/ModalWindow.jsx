import InputEmail from './InputEmail';
import closeIcon from '../assets/icons/close-icon.svg';
import Button from './Button';

function ModalWindow({
  emailModal,
  handleEmailModal,
  textModal,
  handleTextModal,
  handleSubmitButton,
  setIsWindow,
}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-30 bg-black/40">
      <div className="bg-white pb-10 pl-10 rounded-xl max-w-120 mx-3">
        <div className="flex justify-end pr-4 pt-4 opacity-30 hover:opacity-50">
          <button onClick={() => setIsWindow(false)}>
            <img src={closeIcon} alt="Close modal window" />
          </button>
        </div>
        <div className="text-2xl text-[#060b27] text-center font-bold pr-10 pt-4">
          Start optimizing your ads with AI
        </div>
        <p className="mt-3 mb-5 text-center text-[#0E1330] pr-10">
          Create your free account and start optimizing your campaigns in
          minutes.
        </p>
        <form
          onSubmit={handleSubmitButton}
          className="flex flex-col gap-3 pr-10"
        >
          <InputEmail
            value={emailModal}
            className="w-full h-11 border border-[#8f9bb7] rounded-xl p-3"
            onChange={handleEmailModal}
          />
          <input
            type="text"
            value={textModal}
            placeholder="Company website (optional)"
            className="w-full h-11 border border-[#8f9bb7] rounded-xl p-3"
            onChange={handleTextModal}
          />
          <button
            className="w-full h-13 rounded-xl text-white bg-[#7214FF]"
            aria-label="Get AI optimization"
          >
            Get AI optimization
          </button>
          <span className="text-sm text-center text-[#0E1330]">
            Trusted by 500+ marketers
          </span>
        </form>
      </div>
    </div>
  );
}
export default ModalWindow;
