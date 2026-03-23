function Menu({ extraStyle, onClick }) {
  const pages = [
    {
      id: 1,
      link: '#calculator',
      name: 'Calculator',
    },
    {
      id: 2,
      link: '#features',
      name: 'Features',
    },

    {
      id: 3,
      link: '#steps',
      name: 'How it Works',
    },
    {
      id: 4,
      link: '#pricing',
      name: 'Pricing',
    },
    {
      id: 5,
      link: '#faq',
      name: 'FAQ',
    },
  ];

  return (
    <nav>
      <ul className={`flex ${extraStyle}`}>
        {pages.map((page) => (
          <li
            key={page.id}
            className="transition-colors duration-200 hover:text-white/80"
          >
            <a href={page.link} onClick={onClick}>
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
