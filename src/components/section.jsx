const Section = ({
  title,
  titleAlign = 'left',
  link,
  children,
  titleSize = 'text-2xl md:text-3xl',
  titleColor = 'text-neutral-800',
}) => {
  return (
    <section className="mb-12 px-4 md:px-8">
      <div
        className={`flex items-center mb-6 ${
          titleAlign === 'center' ? 'justify-center' : 'justify-between'
        }`}
      >
        <h2
          className={`${titleSize} font-semibold ${titleColor} ${
            titleAlign === 'center' ? 'text-center w-full' : ''
          }`}
        >
          {title}
        </h2>

        {link && titleAlign !== 'center' && (
          <a
            href={link.href}
            className="flex items-center gap-1 text-pink-600 hover:text-pink-700 text-sm font-medium transition ml-auto"
          >
            {link.text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
};

export default Section;
