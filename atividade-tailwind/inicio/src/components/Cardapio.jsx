import CardProduto from './CardProduto';
import { produtos } from '../data/cardapio';

export default function Cardapio() {
  return (
    <section id="cardapio" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Nosso Cardápio</h2>
      {/* Grid responsivo: 1 col no celular, 2 em sm, 3 em lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  );
}