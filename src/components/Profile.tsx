import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/luizfverissimo.png' alt='Luiz Fernando' />
      <div>
        <strong>Luiz Fernando Verissimo</strong>
        <p>
          <img src='icons/level.svg' alt='Level icon' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
