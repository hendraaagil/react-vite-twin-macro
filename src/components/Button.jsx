import tw from 'twin.macro';

const styles = {
  blue: tw`bg-blue-600 focus:ring-blue-400 hover:bg-blue-700`,
  green: tw`bg-green-700 focus:ring-green-500 hover:bg-green-800`,
  red: tw`bg-red-600 focus:ring-red-400 hover:bg-red-700`,
};

const paddingSize = {
  normal: tw`py-2 px-4`,
  wide: tw`py-2 px-10`,
};

const Button = ({ children, clickAction, color, padding, type }) => (
  <button
    type={type || 'button'}
    css={[
      tw`my-2 rounded transition-all focus:ring`,
      padding ? paddingSize[padding] : paddingSize.normal,
      styles[color],
    ]}
    onClick={clickAction}
  >
    {children}
  </button>
);

export default Button;
