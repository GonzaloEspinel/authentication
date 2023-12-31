import { initializeApp } from "firebase/app";
import {
	getAuth,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = {
	apiKey: import.meta.env.VITE_TEST_API_KEY,
	authDomain: import.meta.env.VITE_TEST_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_TEST_PROJECT_ID,
	storageBucket: import.meta.env.VITE_TEST_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_TEST_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_TEST_APP_ID,
	measurementId: import.meta.env.VITE_TEST_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signInUser = async (email, password) => {
	if (!email && !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback) => {
	return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);