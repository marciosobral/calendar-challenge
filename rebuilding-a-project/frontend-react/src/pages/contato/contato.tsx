import styles from './contato.module.css'
import { useState } from 'react';

interface ContatoProps {
  homePage?: boolean;
}

export function Contato({ homePage } : ContatoProps): JSX.Element {
  const monitoresstyle = homePage
  ? `${styles.monitor} ${styles.monitor}`
  : styles.monitor;

  const [monitores, setMonitores] = useState<string[]>([
    ''
  ])

  function createMonitor() {
    setMonitores ([...monitores, 'Monitor']);
  }
  return (
    <>
      <div>
      <h1>Aqui estão os monitores: </h1>
      {monitores.map(monitor => {
        return (
          <>
            <div className={monitoresstyle}>{monitor}</div>
          </>
        )
      }
      )}
      <button onClick={createMonitor}>Criar Monitor</button>
      </div>
    </>
  )
}