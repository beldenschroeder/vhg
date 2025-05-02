import Typography from '@mui/material/Typography';
import { bodyTitle } from '@/styles/typography';
import * as styles from './Body.css';

const Body = () => {
  return (
    <main className={styles.body}>
      <Typography component="h2" sx={bodyTitle}>
        Von Herff Gallery
      </Typography>
    </main>
  );
};

export default Body;
