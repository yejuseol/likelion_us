import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { auth, db, handleFirestoreError, OperationType } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

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
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) { setMode(initialMode); setError(null); }
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

  const field = (label: string, name: string, type = 'text', placeholder = '') => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-400">{label}</label>
      <input
        required type={type} name={name} placeholder={placeholder}
        value={(formData as any)[name]}
        onChange={handleChange}
        className="w-full border-b border-black py-2 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-300"
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white p-8 md:p-12 overflow-y-auto max-h-[90vh]"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-black hover:text-orange-500 transition-colors">
              <X size={32} />
            </button>

            <div className="space-y-12">
              <h2 className="text-4xl font-black tracking-tighter uppercase text-center">
                {mode === 'signup' ? 'Sign Up' : 'Log In'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {error && <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm font-medium">{error}</div>}

                {mode === 'signup' ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {field('First name', 'firstName')}
                      {field('Last name', 'lastName')}
                    </div>
                    {field('Email', 'email', 'email')}
                    {field('Password', 'password', 'password')}
                    {field('School / Company *', 'schoolCompany', 'text', 'ex) Boston University')}
                    {field('City *', 'city', 'text', 'ex) Boston')}
                    {field('Academic Year / Position *', 'academicYearPosition', 'text', 'ex) Sophomore / CEO')}
                    <div className="flex items-center justify-center space-x-3">
                      <input
                        type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange}
                        className="w-5 h-5 border-2 border-black rounded-none checked:bg-black transition-colors cursor-pointer"
                      />
                      <label className="text-sm font-medium">I agree to the terms & conditions</label>
                    </div>
                  </>
                ) : (
                  <>
                    {field('Email', 'email', 'email')}
                    {field('Password', 'password', 'password')}
                  </>
                )}

                <div className="space-y-6 text-center">
                  <button
                    disabled={loading} type="submit"
                    className="w-full max-w-xs mx-auto border border-black py-4 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Submit'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                    className="block w-full text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors uppercase tracking-widest"
                  >
                    {mode === 'login' ? 'Not a member? Join Us' : 'Already a member? Log In'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
