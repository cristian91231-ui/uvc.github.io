// Importa la función principal para inicializar la aplicación de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// Importa el servicio de base de datos en tiempo real Cloud Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
// Importa el servicio de almacenamiento en la nube Firebase Storage (para fotos y archivos)
import { getStorage } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js";

// Objeto de configuración con las credenciales del proyecto de Firebase de la UV
const firebaseConfig = {
    apiKey: "AIzaSyAgHRwgJS8FMhRYKo8h-h9rXZ4qcO0-bSc",
    authDomain: "universidad-d9912.firebaseapp.com",
    projectId: "universidad-d9912",
    storageBucket: "universidad-d9912.firebasestorage.app",
    messagingSenderId: "144457065988",
    appId: "1:144457065988:web:ad274d06e9cfa05c8d3751"
};

// Inicializa la conexión con Firebase usando la configuración anterior
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore (db) y de Storage (storage) para usarlas en todas las páginas
export const db = getFirestore(app);
export const storage = getStorage(app);
