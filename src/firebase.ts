import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'gen-lang-client-0700924016',
  appId: '1:627367671194:web:2e9e5fff25f9d88feeb623',
  apiKey: 'AIzaSyByyoQnWrQ_Nt0XmB5UuxqDordjI-FFWVs',
  authDomain: 'gen-lang-client-0700924016.firebaseapp.com',
  storageBucket: 'gen-lang-client-0700924016.firebasestorage.app',
  messagingSenderId: '627367671194',
};

const FIRESTORE_DB_ID = 'ai-studio-07b2c1df-64a2-4b7e-962e-b75edd1a9ce9';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, FIRESTORE_DB_ID);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(p => ({
        providerId: p.providerId,
        displayName: p.displayName,
        email: p.email,
        photoUrl: p.photoURL,
      })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
