import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import About from '@/components/About';
import News from '@/components/News';
import Publications from '@/components/Publications';


export default function HomePage() {
  return (
    <>
      <About />
      <News />
      <Publications />
    </>
  );
}
