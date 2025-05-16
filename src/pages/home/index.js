import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('https://equilibriofamiliar.rodneyrinaldi.com.br/');
    }, 2000); // Redireciona após 2 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, [router]);

  return (
    <div style={styles.container}>
      <p>Carregando...</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
  },
};