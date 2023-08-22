export default function Card({ allCards }) {
  let sortedCards = allCards.sort((currentCard, nextCard) => {
    let cc = currentCard.category.toLowerCase(),
      nc = nextCard.category.toLowerCase();

    if (cc < nc) {
      return -1;
    }
    if (cc > nc) {
      return 1;
    }
    return 0;
  });

  const cards = sortedCards.map((card) => {
    return (
      <article
        key={card.url}
        className='bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'
      >
        <img
          className='h-56 lg:h-60 w-full object-cover'
          src={card.src}
          alt={card.title}
        />
        <div className='py-4 px-6'>
          <span className='text-sm text-primary'>{card.date}</span>
          <h3 className='font-semibold text-xl leading-6 text-gray-700 my-2'>
            {card.title}
          </h3>
          <p className='paragraph-normal text-gray-600'>{card.description}</p>
          <a className='mt-3 block underline' href={card.url} target='_blank'>
            Read More
          </a>
        </div>
      </article>
    );
  });
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10'>
      {cards}
    </div>
  );
}
