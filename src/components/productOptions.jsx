import { useState } from 'react';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => setSelectedOption(option)}
          style={{
            width: shape === 'square' ? 'auto' : '31px',
            height: shape === 'square' ? '46px' : '31px',
            border: selectedOption === option ? '2px solid primary' : '1px solid lightgray',
            borderRadius: shape === 'square' ? radius : '50%',
            backgroundColor: type === 'color' ? option : 'transparent',
            display: 'inline-block',
            margin: '5px',
            textAlign: 'center',
            lineHeight: shape === 'square' ? '46px' : '31px',
            fontSize: type === 'text' ? '24px' : '0',
            color: type === 'text' ? 'darkgray' : 'transparent',
          }}
        >
          {type === 'text' && option}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
