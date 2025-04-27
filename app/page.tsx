import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import * as styles from './page.css';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <Box className={styles.container} sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar />
      <main>
        <h1>Welcome to Von Heff Gallery</h1>
      </main>
    </Box>
  );
}
