import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { AuthLayout } from './AuthLayout';

interface SignupProps {
  selectedPlan?: string | null;
}

export const Signup: React.FC<SignupProps> = ({ selectedPlan }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle={selectedPlan ? `Complete your ${selectedPlan} plan registration` : "Start your investment journey"}
    >
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Full name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none relative block w-full px-12 py-3 border border-gray-700 bg-gray-800 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-12 py-3 border border-gray-700 bg-gray-800 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-12 py-3 border border-gray-700 bg-gray-800 placeholder-gray-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        {selectedPlan && (
          <div className="rounded-lg bg-gray-800 p-4 border border-gray-700">
            <h3 className="text-sm font-medium text-gray-300">Selected Plan</h3>
            <p className="mt-1 text-lg font-semibold text-white">{selectedPlan}</p>
          </div>
        )}

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 bg-gray-800 border-gray-700 rounded text-purple-500 focus:ring-purple-500"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
            I agree to the{' '}
            <Link to="#" className="text-purple-400 hover:text-purple-300">Terms of Service</Link>
            {' '}and{' '}
            <Link to="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>
          </label>
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Create account
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/auth?mode=login" className="font-medium text-purple-400 hover:text-purple-300">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};