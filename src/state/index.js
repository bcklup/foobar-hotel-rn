import create from 'zustand';

const mockRoomsData = [
    {
        _id: 1,
        room_name: 'Single',
        summary: 'Etiam pretium iaculis justo.',
        accomodation: 1,
        beds: 1,
        bathrooms: 1,
        amenities: [
            'Cable TV',
            'Wi-Fi',
            'Kitchen',
            'Paid Parking',
            'Pets Allowed',
            'Smoking Allowed',
            'Buzzer/Wireless Intercom',
            'Heating',
            'Microwave',
        ],
    },
    {
        _id: 2,
        room_name: 'Single',
        summary: 'Maecenas tincidunt lacus at velit.',
        accomodation: 1,
        beds: 1,
        bathrooms: 1,
        amenities: [
            'Cable TV',
            'Wi-Fi',
            'Kitchen',
            'Paid Parking',
            'Pets Allowed',
            'Smoking Allowed',
            'Buzzer/Wireless Intercom',
            'Heating',
            'Microwave',
        ],
    },
    {
        _id: 3,
        room_name: 'Single',
        summary: 'Nullam porttitor lacus at turpis.',
        accomodation: 1,
        beds: 1,
        bathrooms: 1,
        amenities: [
            'Cable TV',
            'Wi-Fi',
            'Kitchen',
            'Paid Parking',
            'Pets Allowed',
            'Smoking Allowed',
            'Buzzer/Wireless Intercom',
            'Heating',
            'Microwave',
        ],
    },
    {
        _id: 4,
        room_name: 'Single',
        summary: 'In sagittis dui vel nisl.',
        accomodation: 1,
        beds: 1,
        bathrooms: 1,
        amenities: [
            'Cable TV',
            'Wi-Fi',
            'Kitchen',
            'Paid Parking',
            'Pets Allowed',
            'Smoking Allowed',
            'Buzzer/Wireless Intercom',
            'Heating',
            'Microwave',
        ],
    },
    {
        _id: 5,
        room_name: 'Single',
        summary: 'Aliquam erat volutpat. In congue.',
        accomodation: 1,
        beds: 1,
        bathrooms: 1,
        amenities: [
            'Cable TV',
            'Wi-Fi',
            'Kitchen',
            'Paid Parking',
            'Pets Allowed',
            'Smoking Allowed',
            'Buzzer/Wireless Intercom',
            'Heating',
            'Microwave',
        ],
    },
];

const useStore = create(set => ({
    rooms: [],
    setRooms: rooms => set({ rooms }),
}));

export default useStore;
