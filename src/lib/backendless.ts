import Backendless from "backendless";

const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY;

// Pastikan inisialisasi HANYA berjalan jika kunci ada
if (APP_ID && API_KEY) {
    Backendless.initApp(APP_ID, API_KEY);
}

export default Backendless;