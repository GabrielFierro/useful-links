import { useState } from 'react';
import { data } from './data';
import Text from './Text';
import Card from '../card/Card';

export default function Category() {
  const sortedCards = data.sort((a, b) => {
    let fa = a.category.toLowerCase(),
      fb = b.category.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  const [card, setCard] = useState(sortedCards);
  const categories = [
    'All',
    ...new Set(sortedCards.map((card) => card.category))
  ];

  const filter = (cat) => {
    if (cat === 'All') {
      setCard(sortedCards);
      return;
    }
    setCard(sortedCards.filter((item) => item.category === cat));
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
