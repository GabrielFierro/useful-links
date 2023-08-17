export default function Navbar() {
  return (
    <div className='bg-navbar w-full h-32 md:h-16 pl-12 flex flex-col md:flex-row justify-evenly items-center'>
      <span>
        Useful Links - This is for personal purpose you can fork on GitHub and
        customize your way.
      </span>
      <a
        href='https://github.com/GabrielFierro/useful-links'
        target='_blank'
        rel='noreferrer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-github bg-white'
          width='44'
          height='44'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='#000000'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
        </svg>
      </a>
    </div>
  );
}
