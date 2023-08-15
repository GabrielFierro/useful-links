export default function Card({ allCards }) {
  const cards = allCards.map((card) => {
    return (
      <article
        key={card.id}
        className='bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'
      >
        <img
          className='h-56 lg:h-60 w-full object-cover'
          src={card.src}
          alt={card.title}
        />
        <div className='p-3'>
          <span className='text-sm text-primary'>November 19, 2022</span>
          <h3 className='font-semibold text-xl leading-6 text-gray-700 my-2'>
            International Women&apos;s Day 2022: Date, history, significance,
            theme this year
          </h3>
          <p className='paragraph-normal text-gray-600'>
            Happy Women&apos;s Day 2022: Read on to know all about the history
            and significance...
          </p>
          <a className='mt-3 block' href='#'>
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
