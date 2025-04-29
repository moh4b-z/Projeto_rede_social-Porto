import { useState, useEffect } from 'react';
import styles from './imageInputToggle.module.css';

function ImageInputToggle({ imgUrl, setImgUrl }) {
    const [isOpen, setIsOpen] = useState(false);
    const [tempUrl, setTempUrl] = useState("");

    useEffect(() => {
        if (!imgUrl) {
            setIsOpen(false);
            setTempUrl("");
        }
    }, [imgUrl]);

    const handleIconClick = () => {
        if (imgUrl) {
            setImgUrl("");
        } else {
            setIsOpen(true);
        }
    };

    const handleInputBlur = () => {
        const trimmed = tempUrl.trim();
    
        // Regex para verificar se termina com uma extensão de imagem
        const isValidImageUrl = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i.test(trimmed);
    
        if (trimmed === "") return;
    
        if (isValidImageUrl) {
            setImgUrl(trimmed);
            setIsOpen(false);
        } else {
            setTempUrl("")
            setIsOpen(false)
            alert("Link inválido! Certifique-se de usar um link direto de imagem como .jpg, .png, etc.");
            // Mantém o input aberto para o usuário corrigir
        }
    }
    
    return (
        <div className={styles.wrapper}>
            {isOpen ? (
                <input
                    type="text"
                    placeholder="Cole o link da imagem..."
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    onBlur={handleInputBlur}
                    autoFocus
                    className={styles.input}
                />
            ) : (
                <div className={styles.icon} onClick={handleIconClick}>
                    <ion-icon name={imgUrl ? "trash-sharp" : "images"}></ion-icon>
                </div>
            )}
        </div>
    );
}

export default ImageInputToggle;
