import create from 'zustand';

const useRoomsStore = create(set => ({
    rooms: [],
    setRooms: rooms => set({ rooms }),
}));

export default useRoomsStore;
