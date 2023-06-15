import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit{
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Kitchen, Whirlpool',
        price: 500,
        photos: 'https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg',
        checkinTime: new Date('20-June-2023'),
        checkoutTime: new Date('27-June-2023'),
        rating: 3.8
      },
      {
        roomNumber: 2,
        roomType: 'Normal Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV',
        price: 200,
        photos: 'https://cdn.mos.cms.futurecdn.net/dwWovMJUDx75PWCCTSnHqU.jpg',
        checkinTime: new Date('20-June-2023'),
        checkoutTime: new Date('27-June-2023'),
        rating: 4.5432423
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Whirlpool, Outside Pool, Seaview',
        price: 10000,
        photos: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/17/0b/00/adel-private-suites.jpg',
        checkinTime: new Date('20-June-2023'),
        checkoutTime: new Date('27-June-2023'),
        rating: 4.9
      }
    ]
  }

  roomList: RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
