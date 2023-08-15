import { useState } from 'react';
import { data } from './data';
import Text from './Text';
import Card from '../card/Card';

export default function Category() {
  const [card, setCard] = useState(data);
  const categories = ['All', ...new Set(data.map((card) => card.category))];

  const filter = (cat) => {
    if (cat === 'All') {
      setCard(data);
      return;
    }
    setCard(data.filter((item) => item.category === cat));
  };

  return (
    <section>
      <article className='mt-12 md:flex md:items-center md:justify-center md:space-x-8'>
        <Text categories={categories} handleClick={filter} />
      </article>
      <article className='px-12 mt-16'>
        <Card allCards={card} />
      </article>
    </section>
  );
}
