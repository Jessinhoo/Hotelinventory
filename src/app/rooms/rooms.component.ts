import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;


  constructor() {}
  

  ngOnInit(): void {
    // console.log(this.headerComponent);
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

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
  }

  ngDoCheck(): void {
    console.log("on changes is called");
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  ngAfterViewChecked(): void {
    
  }
 
  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Kitchen, Whirlpool',
      price: 500,
      photos: 'https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg',
      checkinTime: new Date('20-June-2023'),
      checkoutTime: new Date('27-June-2023'),
      rating: 3.8
    }

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

        
}
