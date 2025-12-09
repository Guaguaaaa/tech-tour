import { create } from 'zustand';

interface AppState {
    activeToolId: string | null; // 当前选中的工具 ID，null 表示没选中
    setActiveToolId: (id: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
    activeToolId: null,
    setActiveToolId: (id) => set({ activeToolId: id }),
}));