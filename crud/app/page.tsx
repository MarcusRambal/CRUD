// app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook de Next.js para navegar

export default function LoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Tu usuario Dummy
  const DUMMY_USER = { user: 'marcus', pass: '1234' };

  const handleLogin = () => {
    if (user === DUMMY_USER.user && password === DUMMY_USER.pass) {
      // Si es correcto, lo mandamos al dashboard
      router.push('/dashboard/query');
    } else {
      alert('Credenciales incorrectas (Pista: marcus/1234)');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-slate-800">Iniciar Sesión</h1>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Usuario" 
            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setUser(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Entrar
          </button>
        </div>
      </div>
    </main>
  );
}