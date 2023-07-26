import { get, writable } from "svelte/store";

const createCourses = () => {
  const { subscribe, update, set } = writable<any[]>([]);
};
