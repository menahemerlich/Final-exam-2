import { create } from 'zustand'

export const useLaunchers = create((set) => ({
    launchers: [],

    fetchLaunchers: async () => {
        try {
            const response = await fetch("http://localhost:3030/api/launchers");
            const result = await response.json();
            set({ launchers: result })
        } catch (error) {
            console.error(error);
        };
    }
}))