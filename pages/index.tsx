import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Code from "../src/components/Code"

const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

const htmlCode = `
    <div>
      <h1> PrismJS Tutorial </h1>
      <p>
      Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
      </p>
    </div>
`;


const Homepage = () => {
  return (
    <Container maxWidth='sm'>
     <Typography variant='h2'>Home Page</Typography>
      <Typography color='GrayText'>
        Welcome to the NextJS starter template for working with TypeScript and MUI5.
        Working with NextJS and TypeScript assists with creating a high-quality and well-organised project, 
        and Material UI ensures clean design and rapid development.
      </Typography>
      <Code code={JSCode} language="javascript" />
      <Code code={htmlCode} language="html" />
    </Container>
  );
};

export default Homepage;