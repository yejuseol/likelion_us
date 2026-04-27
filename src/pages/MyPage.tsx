import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Save, CheckCircle } from 'lucide-react';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  schoolCompany: string;
  city: string;
  academicYearPosition: string;
}

export default function MyPage() {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<UserData>({
    firstName: '', lastName: '', email: '',
    schoolCompany: '', city: '', academicYearPosition: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) { navigate('/'); return; }
      setUser(currentUser);
      try {
        const snap = await getDoc(doc(db, 'users', currentUser.uid));
        if (snap.exists()) {
          const d = snap.data();
          setFormData({
            firstName: d.firstName || '',
            lastName: d.lastName || '',
            email: d.email || currentUser.email || '',
            schoolCompany: d.schoolCompany || '',
            city: d.city || '',
            academicYearPosition: d.academicYearPosition || '',
          });
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setError(null);
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        schoolCompany: formData.schoolCompany,
        city: formData.city,
        academicYearPosition: formData.academicYearPosition,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e: any) {
      setError('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const inputClass = 'w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors bg-transparent';

  const field = (label: string, name: keyof UserData, type = 'text', placeholder = '', disabled = false) => (
    <div className="space-y-1">
      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</label>
      <input
        type={type} name={name} value={formData[name]} onChange={handleChange}
        placeholder={placeholder} disabled={disabled}
        className={`${inputClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      />
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl font-black">
                {(formData.firstName?.[0] || user?.email?.[0] || 'M').toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter uppercase">
                  {formData.firstName} {formData.lastName}
                </h1>
                <p className="text-sm text-gray-500">{formData.email}</p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200" />
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-lg font-black uppercase tracking-tight">Profile Information</h2>

            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm">{error}</div>
            )}

            <div className="grid grid-cols-2 gap-6">
              {field('First Name', 'firstName', 'text', 'First name')}
              {field('Last Name', 'lastName', 'text', 'Last name')}
            </div>
            {field('Email', 'email', 'email', '', true)}
            {field('School / Company', 'schoolCompany', 'text', 'ex) Boston University')}
            {field('City', 'city', 'text', 'ex) Boston')}
            {field('Academic Year / Position', 'academicYearPosition', 'text', 'ex) Sophomore / CEO')}

            <div className="pt-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className={`flex items-center justify-center space-x-2 w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all ${
                  saved
                    ? 'bg-green-500 text-white'
                    : 'bg-black text-white hover:bg-orange-500'
                } disabled:opacity-50`}
              >
                {saved ? (
                  <><CheckCircle size={16} /><span>Saved!</span></>
                ) : (
                  <><Save size={16} /><span>{saving ? 'Saving...' : 'Save Changes'}</span></>
                )}
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
