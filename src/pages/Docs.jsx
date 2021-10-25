import tw from 'twin.macro';
import Button from '../components/Button';
import Heading from '../components/Heading';

const Docs = () => {
  return (
    <div
      css={[
        tw`flex flex-col justify-center items-center`,
        tw`p-4`,
        tw`text-center`,
        tw`min-h-screen`,
      ]}
    >
      <Heading as="h1">This is Heading 1</Heading>
      <Heading as="h2">This is Heading 2</Heading>
      <Heading as="h3">This is Heading 3</Heading>
      <Heading as="h4">This is Heading 4</Heading>
      <Heading as="h5">This is Heading 5</Heading>
      <Heading as="h6">This is Heading 6</Heading>
      <Button clickAction={() => history.back()} color="green">
        Back to Home
      </Button>
    </div>
  );
};

export default Docs;
