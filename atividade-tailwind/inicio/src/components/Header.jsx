export default function Header() {
  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Cardápio', href: '#cardapio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    // Exercício 2: Header fixo no topo, fundo branco, sombra leve e z-index 10
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-amber-700">Café Dev</span>
        
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium hover:text-amber-700 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}