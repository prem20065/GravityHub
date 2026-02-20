import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";

export const taskService = {
    async getTasks(userId) {
        try {
            const q = query(collection(db, `users/${userId}/tasks`), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (e) {
            console.error("Error fetching tasks: ", e);
            return [];
        }
    },

    async addTask(userId, task) {
        try {
            const docRef = await addDoc(collection(db, `users/${userId}/tasks`), {
                ...task,
                createdAt: new Date().toISOString()
            });
            return docRef.id;
        } catch (e) {
            console.error("Error adding task: ", e);
        }
    },

    async toggleTask(userId, taskId, completed) {
        try {
            const taskRef = doc(db, `users/${userId}/tasks`, taskId);
            await updateDoc(taskRef, { completed });
        } catch (e) {
            console.error("Error updating task: ", e);
        }
    },

    async deleteTask(userId, taskId) {
        try {
            await deleteDoc(doc(db, `users/${userId}/tasks`, taskId));
        } catch (e) {
            console.error("Error deleting task: ", e);
        }
    }
};

export const noteService = {
    async saveNote(userId, noteId, content) {
        try {
            const noteRef = doc(db, `users/${userId}/notes`, noteId);
            await updateDoc(noteRef, { content, updatedAt: new Date().toISOString() });
        } catch (e) {
            // If doc doesn't exist, create it
            await addDoc(collection(db, `users/${userId}/notes`), {
                content,
                updatedAt: new Date().toISOString()
            });
        }
    }
};
