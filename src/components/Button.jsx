import tw from 'twin.macro';

const styles = {
  blue: tw`bg-blue-600 focus:ring-blue-400 focus-visible:ring-blue-400 hover:bg-blue-700`,
  green: tw`bg-green-700 focus:ring-green-500 focus-visible:ring-green-500 hover:bg-green-800`,
  red: tw`bg-red-600 focus:ring-red-400 focus-visible:ring-red-400 hover:bg-red-700`,
};

const Button = ({ children, clickAction, color, type }) => (
  <button
    type={type || 'button'}
    css={[
      tw`my-2 py-2 px-4`,
      tw`font-medium text-gray-50`,
      tw`rounded transition-all`,
      tw`focus:ring`,
      styles[color],
    ]}
    onClick={clickAction}
  >
    {children}
  </button>
);

export default Button;
