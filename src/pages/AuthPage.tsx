import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Signup } from '../components/auth/Signup';

export const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';
  const plan = searchParams.get('plan');

  return mode === 'signup' ? <Signup selectedPlan={plan} /> : <Login />;
};