import RoomsAPI from '../api/rooms-api';

export default {
    getRooms: RoomsAPI.getRooms,
    getRoom: roomId => RoomsAPI.getRoom(roomId),
};
