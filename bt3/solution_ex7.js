const hotelRooms = [
  {
    roomId: "P101",
    roomType: "Deluxe",
    pricePerNight: 1500000,
    status: "VACANT"
  },
  {
    roomId: "P102",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "OCCUPIED"
  },
  {
    roomId: "P103",
    roomType: "Superior",
    pricePerNight: 1200000,
    status: "VACANT"
  }
];

console.log("--- DANH SÁCH PHÒNG BAN ĐẦU ---");

for (const room of hotelRooms) {
  console.log(
    room.roomId + " | " +
    room.roomType + " | " +
    room.pricePerNight + " VNĐ | " +
    room.status
  );
}

// CREATE - Thêm phòng P104
const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT"
};

hotelRooms.push(newRoom);

console.log("--- SAU KHI THÊM P104 ---");

for (const room of hotelRooms) {
  console.log(
    room.roomId + " | " +
    room.roomType + " | " +
    room.pricePerNight + " VNĐ | " +
    room.status
  );
}

let roomFound = null;

for (const room of hotelRooms) {
  if (room.roomId === "P101") {
    roomFound = room;
    break;
  }
}

console.log("--- TÌM PHÒNG P101 ---");

if (roomFound !== null) {
  console.log(
    roomFound.roomId + " | " +
    roomFound.roomType + " | " +
    roomFound.pricePerNight + " VNĐ | " +
    roomFound.status
  );
} else {
  console.log("Không tìm thấy phòng P101");
}

for (const room of hotelRooms) {
  if (room.roomId === "P101") {
    room.status = "OCCUPIED";
    break;
  }
}

console.log("--- SAU KHI CẬP NHẬT P101 ---");

for (const room of hotelRooms) {
  console.log(
    room.roomId + " | " +
    room.roomType + " | " +
    room.pricePerNight + " VNĐ | " +
    room.status
  );
}

for (let i = 0; i < hotelRooms.length; i++) {
  if (hotelRooms[i].roomId === "P103") {
    hotelRooms.splice(i, 1);
    break;
  }
}

console.log("--- SAU KHI XÓA P103 ---");

for (const room of hotelRooms) {
  console.log(
    room.roomId + " | " +
    room.roomType + " | " +
    room.pricePerNight + " VNĐ | " +
    room.status
  );
}