import create from 'zustand';

export interface AppState {
  count: number;
  incrementCount: () => void;
}

const useStore = create<AppState>((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
