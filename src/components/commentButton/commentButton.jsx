import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import styles from './commentButton.module.css';

function CommentButton({ comments = [], onClick }) {
  const { user, isLoggedIn } = useAuth();
  const [commented, setCommented] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const fezComentario = comments.some(c => c.idUsuario === user.id);
      setCommented(fezComentario);
    }
  }, [comments, user]);

  const escolherIcone = () => {
    if (commented) return "chatbubble-ellipses-sharp";
    if (comments.length > 0) return "chatbubble-ellipses-outline";
    return "chatbubble-outline";
  };

  return (
    <button onClick={onClick} className={styles.iconeComentario}>
      <ion-icon 
        name={escolherIcone()} 
        style={{ color: commented ? "var(--color-gold)" : "var(--color-seablue)" }}
      ></ion-icon>
      <span style={{ color: commented ? "var(--color-gold)" : "var(--color-seablue)" }}>
        {comments.length}
      </span>
    </button>
  );
}

export default CommentButton;
