// apis
import { API, ENDPOINTS } from './instance';
import MainAPI from './main-api';

class RoomsAPI extends MainAPI {
    /**
     * @return {object} rooms list
     */
    async getRooms() {
        return await API.get(ENDPOINTS.GET_ROOMS);
    }

    /**
     * @return {object} room object
     */
    async getRoom(roomId) {
        return API.get(`${ENDPOINTS.GET_ROOMS}/${roomId}`);
    }
}

export default new RoomsAPI();
