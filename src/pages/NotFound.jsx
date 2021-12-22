import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Organisms/Footer';

function NotFound() {
  const footer = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
  };

  return (
    <>
      <div className="h-full text-slate-100 font-mono">
        <h1 className="text-6xl text-center mt-10">404</h1>
        <h2 className="text-4xl text-center mt-5">Pagina não encontrada</h2>
        <div className="w-full">
          <p className="text-xl text-center mt-10 underline decoration-slate-600">
            <Link to="/">
              Voltar para o inicio
            </Link>
          </p>
        </div>
      </div>
      <Footer style={ footer } className="border-t border-slate-700" />
    </>
  );
}

export default NotFound;
