import styles from './header.module.css'
import { Link } from 'react-router-dom';

interface HeaderProps {
  homePage?: boolean;
}

export function Header({ homePage } : HeaderProps): JSX.Element {
  const logo = homePage
  ? `${styles.logo} ${styles.logo}`
  : styles.logo;

  const center = homePage
  ? `${styles.center} ${styles.center}`
  : styles.center;

  const mainMenu = homePage
  ? `${styles.mainMenu} ${styles.mainMenu}`
  : styles.mainMenu;


  return (
    <>
      <header>
        <div className={center}>
          <div className={logo}><a href='/'>Início</a></div>
          <ul className={mainMenu}>
            <li>
              <a href='/'>Início</a>
            </li>
            <li>
              <a href='/cursos'>Cursos</a>
            </li>
            <li>
              {/* <a href='/contato'>Contato</a> */}
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
          </div>
      </header>
    </>
  )
}

/* {% if user.is_authenticated %}
<li class=""><a href="{% url 'perfil' %}" target="">Perfil</a>
</li>
<li class=""><a href="{% url 'logout' %}" class="Destaque">Sair</a>
</li>
{% else %}
<li><a href="{% url 'register' %}" target="">Registrar</a>
</li>
<a href="{% url 'login' %}" class="Destaque"> Login </a>
{% endif %} */