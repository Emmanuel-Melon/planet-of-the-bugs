import { ID, Models, Permission, Role } from 'appwrite';
import { get, writable } from 'svelte/store';
import { sdk, server } from "$lib/appwrite/appwriteClient";

const createCourses = () => {
    const { subscribe, update, set } = writable<any[]>([]);

}