import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyB80uNZLlerEXDj0NHeVgG6Cf3kSTj5lW0",
	authDomain: "student-organization-a3ad3.firebaseapp.com",
	projectId: "student-organization-a3ad3",
	storageBucket: "student-organization-a3ad3.appspot.com",
	messagingSenderId: "774682678832",
	appId: "1:774682678832:web:81ce32e6eb410fe0e17ff5",
	measurementId: "G-6RPL9W681E",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { db , analytics };
