import { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Gallery = ({ images, width = '100%', height = 'auto', radius = 'xl', showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback para caso images seja undefined ou vazio
  if (!images || images.length === 0) return null;

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    /* CORREÇÃO: Aplicando o width recebido via props no style */
    <div 
      className="relative mx-auto" 
      style={{ width: width, height: height }}
    >
      <div 
        className={`w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden`}
        style={{ borderRadius: radius === 'xl' ? '0.75rem' : radius }} // Garante que o radius funcione mesmo se for um valor CSS puro
      >
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Botão Anterior */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-30 z-10 transition-opacity"
        aria-label="Imagem anterior"
      >
        <img src={arrowLeft} alt="Anterior" className="w-6 h-6" />
      </button>

      {/* Próximo Botão */}
      <button
        onClick={handleNext}
        disabled={currentIndex === images.length - 1}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-30 z-10 transition-opacity"
        aria-label="Próxima imagem"
      >
        <img src={arrowRight} alt="Próxima" className="w-6 h-6" />
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              currentIndex === index ? 'bg-pink-600 scale-110' : 'bg-gray-300/80'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Miniaturas (Thumbnails) */}
      {showThumbs && (
        <div className="flex justify-center mt-4 gap-2 flex-wrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Miniatura ${index + 1}`}
              className={`w-20 h-16 object-cover border-2 cursor-pointer transition ${
                currentIndex === index ? 'border-pink-600' : 'border-transparent hover:border-gray-200'
              }`}
              onClick={() => setCurrentIndex(index)}
              style={{ borderRadius: radius === 'xl' ? '0.75rem' : radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
