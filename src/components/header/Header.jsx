import Category from '../category/Category';

export default function Header() {
  return (
    <main className='w-full h-auto'>
      <section>
        <article className='w-full text-center mt-12'>
          <h1 className='font-bold text-4xl py-2'>Useful Links</h1>
          <p className='font-regular text-lg text-grey'>
            A free repository with links for useful websites using React and
            Tailwind CSS
          </p>
        </article>
      </section>
      <section className='my-6'>
        <Category />
      </section>
    </main>
  );
}
