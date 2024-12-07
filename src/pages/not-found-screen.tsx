import {Link} from 'react-router-dom';
import {ReactElement} from 'react';

function NotFoundScreen(): ReactElement {
  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
