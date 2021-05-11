import create from 'zustand';

const useStore = create(set => ({
    rooms: [],
    setRooms: rooms => set({ rooms }),
}));

export default useStore;
