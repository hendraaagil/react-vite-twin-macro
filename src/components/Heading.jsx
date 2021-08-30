import 'twin.macro';

const Heading = ({ as, children }) => {
  switch (as) {
    case 'h6':
      return <h6 tw="font-bold text-lg">{children}</h6>;
    case 'h5':
      return <h5 tw="font-bold text-xl">{children}</h5>;
    case 'h4':
      return <h4 tw="font-bold text-2xl">{children}</h4>;
    case 'h3':
      return <h3 tw="font-bold text-3xl">{children}</h3>;
    case 'h2':
      return <h2 tw="font-bold text-4xl">{children}</h2>;
    case 'h1':
      return <h1 tw="font-bold text-5xl">{children}</h1>;
  }
  return <p>{children}</p>;
};

export default Heading;
