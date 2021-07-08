import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const Homepage = () => {
  return (
    <Container maxWidth='sm'>
     <Typography variant='h2'>Home Page</Typography>
      <Typography color='GrayText'>
        Welcome to the NextJS starter template for working with TypeScript and MUI5.
        Working with NextJS and TypeScript assists with creating a high-quality and well-organised project, 
        and Material UI ensures clean design and rapid development.
      </Typography>
    </Container>
  );
};

export default Homepage;