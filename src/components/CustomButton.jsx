import tw from 'twin.macro';

const styles = {
  blue: tw`bg-blue-600 focus:ring-blue-400 hover:bg-blue-700`,
  emerald: tw`bg-emerald-700 focus:ring-emerald-500 hover:bg-emerald-800`,
  red: tw`bg-red-600 focus:ring-red-400 hover:bg-red-700`,
};

const paddingSize = {
  normal: tw`py-2 px-4`,
  wide: tw`py-2 px-10`,
};

const CustomButton = ({ children, clickAction, color, padding, type }) => (
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

export default CustomButton;
