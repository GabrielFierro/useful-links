import { useState } from 'react';

export default function Button({ categories, handleClick }) {
  const [activeCategory, setactiveCategory] = useState(0);
  const [textColor, setTextColor] = useState('black');

  const handleClickCategory = (index) => {
    setactiveCategory(index);
    setTextColor('black');
  };

  const texts = categories.map((category, index) => {
    return (
      <div key={index}>
        <p
          className='w-auto px-4 h-6 rounded-md text-center font-medium text-lg my-2 cursor-pointer'
          key={index}
          style={{
            color: activeCategory === index ? textColor : '#767D89'
          }}
          onClick={() => {
            handleClick(category);
            handleClickCategory(index);
          }}
        >
          {category}
        </p>
      </div>
    );
  });
  return (
    <div className='flex items-center space-x-4 overflow-y-auto md:max-w-lg xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl whitespace-nowrap'>
      {texts}
    </div>
  );
}
