import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft } from 'lucide-react';
import { auth, db, handleFirestoreError, OperationType } from './firebase';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  updateProfile, sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

type Mode = 'login' | 'signup' | 'reset';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const emptyForm = {
  firstName: '', lastName: '', email: '', password: '',
  schoolCompany: '', city: '', academicYearPosition: '', agreeTerms: false,
};

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    if (isOpen) { setMode(initialMode); setError(null); setResetSent(false); }
  }, [isOpen, initialMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (mode === 'signup') {
        if (!formData.agreeTerms) throw new Error('Please agree to the terms & conditions.');
        const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(user, { displayName: `${formData.firstName} ${formData.lastName}` });
        const path = `users/${user.uid}`;
        try {
          await setDoc(doc(db, path), {
            uid: user.uid, firstName: formData.firstName, lastName: formData.lastName,
            email: formData.email, schoolCompany: formData.schoolCompany, city: formData.city,
            academicYearPosition: formData.academicYearPosition, createdAt: serverTimestamp(),
          });
        } catch (err) { handleFirestoreError(err, OperationType.WRITE, path); }
      } else {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      }
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) { setError('Please enter your email address.'); return; }
    setLoading(true);
    setError(null);
    try {
      await sendPasswordResetEmail(auth, formData.email);
      setResetSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = 'w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-300 bg-transparent';

  const field = (label: string, name: string, type = 'text', placeholder = '') => (
    <div className="space-y-1">
      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</label>
      <input required type={type} name={name} placeholder={placeholder}
        value={(formData as any)[name]} onChange={handleChange} className={inputClass} />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 overflow-y-auto max-h-[90vh] shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors">
              <X size={22} />
            </button>

            {/* Reset password view */}
            {mode === 'reset' ? (
              <div className="space-y-8">
                <div className="space-y-2">
                  <button onClick={() => { setMode('login'); setError(null); setResetSent(false); }}
                    className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-6">
                    <ArrowLeft size={14} /><span>Back to Login</span>
                  </button>
                  <h2 className="text-3xl font-black tracking-tighter uppercase">Reset Password</h2>
                  <p className="text-sm text-gray-500">We'll send a reset link to your email.</p>
                </div>
                {resetSent ? (
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center space-y-2">
                    <p className="font-bold text-green-700">Email sent!</p>
                    <p className="text-sm text-green-600">Check your inbox for the reset link.</p>
                  </div>
                ) : (
                  <form onSubmit={handleReset} className="space-y-6">
                    {error && <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm">{error}</div>}
                    {field('Email', 'email', 'email')}
                    <button disabled={loading} type="submit"
                      className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-all disabled:opacity-50">
                      {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <div className="space-y-8">
                <h2 className="text-3xl font-black tracking-tighter uppercase">
                  {mode === 'signup' ? 'Join Us' : 'Welcome Back'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm">{error}</div>}

                  {mode === 'signup' ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        {field('First name', 'firstName')}
                        {field('Last name', 'lastName')}
                      </div>
                      {field('Email', 'email', 'email')}
                      {field('Password', 'password', 'password')}
                      {field('School / Company', 'schoolCompany', 'text', 'ex) Boston University')}
                      {field('City', 'city', 'text', 'ex) Boston')}
                      {field('Academic Year / Position', 'academicYearPosition', 'text', 'ex) Sophomore / CEO')}
                      <label className="flex items-center space-x-3 cursor-pointer pt-1">
                        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-gray-300 checked:bg-orange-500 checked:border-orange-500 cursor-pointer" />
                        <span className="text-sm text-gray-600">I agree to the terms & conditions</span>
                      </label>
                    </>
                  ) : (
                    <>
                      {field('Email', 'email', 'email')}
                      {field('Password', 'password', 'password')}
                      <div className="text-right">
                        <button type="button" onClick={() => { setMode('reset'); setError(null); }}
                          className="text-xs font-semibold text-gray-400 hover:text-orange-500 transition-colors">
                          Forgot password?
                        </button>
                      </div>
                    </>
                  )}

                  <div className="space-y-3 pt-2">
                    <button disabled={loading} type="submit"
                      className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-all disabled:opacity-50">
                      {loading ? 'Processing...' : mode === 'signup' ? 'Create Account' : 'Log In'}
                    </button>
                    <button type="button"
                      onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(null); }}
                      className="w-full text-sm font-semibold text-gray-400 hover:text-orange-500 transition-colors py-2">
                      {mode === 'login' ? 'Not a member? Join Us →' : 'Already a member? Log In →'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
