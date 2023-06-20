import { get, writable } from 'svelte/store';
import { sdk, server } from "$lib/appwrite/appwriteClient";

export const createCourse = () => {
    const { subscribe, update, set } = writable<any[]>([]);
}