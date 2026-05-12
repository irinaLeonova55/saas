import InputEmail from '../components/InputEmail';

import logo from '../assets/icons/logo.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import Menu from '../components/Menu';

function Footer({ emailFooter, handleEmailFooter, handleSubscribed }) {
  const pages = [
    {
      id: 1,
      link: '#',
      name: 'Privacy Policy',
    },
    {
      id: 2,
      link: '#pricing',
      name: 'Sigh up',
    },
    {
      id: 3,
      link: 'https://irinaleonova55.github.io/portfolio-en/',
      name: 'Developed by Leonova',
    },
  ];

  const socialLinks = [
    {
      id: 1,
      link: '#',
      social: 'Facebook',
      icon: facebookIcon,
    },
    {
      id: 2,
      link: '#',
      social: 'Linkedin',
      icon: linkedinIcon,
    },
    {
      id: 3,
      link: '#',
      social: 'Instagram',
      icon: instagramIcon,
    },
  ];
  return (
    <footer className="relative w-full pt-10 md:pt-20 pb-10 bg-[#060b27] overflow-hidden  mt-12 sm:mt-25">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 max-w-318 mx-auto px-3 md:px-5 mb-11">
        <div className="flex flex-col lg:flex-row justify-between w-full mb-11">
          <div className="w-full max-w-120 h-auto z-10">
            <img src={logo} alt="OptiAds" loading="lazy" />
            <div className="bg-[#0E1330] w-full rounded-xl border border-[#282D45] py-6 sm:py-10 px-3 sm:px-7 mt-9">
              <h5 className="text-white text-xl text-left font-bold mb-5">
                Subscribe to our newsletter
              </h5>
              <form
                onSubmit={handleSubscribed}
                className="relative max-w-md mx-auto"
              >
                <InputEmail
                  value={emailFooter}
                  className="w-full py-4 pl-3 pr-36 rounded-xl bg-[#0E1330] border border-[#2a2f55]"
                  onChange={handleEmailFooter}
                />

                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-[#7214FF] rounded-lg"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full mb-11">
          <div className="z-10">
            <div className="font-semibold mb-6">Menu</div>
            <Menu extraStyle="flex-col gap-6" />
          </div>
          <nav className="mt-12 z-10">
            <ul className="flex flex-col gap-6">
              {pages.map((page) => (
                <li key={page.id}>
                  <a href={page.link}>{page.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-between items-end gap-2 w-full h-16 border-t border-[#282D45] px-3 md:px-5 max-w-318 mx-auto">
        <span>Copyright © OptiAds</span>
        <ul className="flex gap-4">
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id}>
              <a href={socialLink.link}>
                <img src={socialLink.icon} alt={socialLink.social} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute z-5 w-60 h-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7214FF] rounded-full blur-[170px]" />
    </footer>
  );
}

export default Footer;
