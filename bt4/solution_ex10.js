/*
PHÂN TÍCH TRADE-OFF:
DOT NOTATION VS BRACKET NOTATION
*/

// =====================================================
// 1. BẢNG SO SÁNH
// =====================================================

/*

| Tiêu chuẩn             | Dot Notation                 | Bracket Notation                 |
| ---------------------- | ---------------------------- | -------------------------------- |
| Cú pháp                | obj.prop                     | obj["prop"] hoặc obj[expression] |
| Thuận tiện & thẩm mỹ   | Ngắn gọn, dễ đọc             | Dài hơn, cần dấu ngoặc vuông     |
| IDE Autocomplete       | Hỗ trợ tốt                   | Hỗ trợ kém hơn                   |
| Truy cập qua biến động | Không hỗ trợ                 | Hỗ trợ                           |
| Key có dấu gạch ngang  | Không sử dụng trực tiếp được | Sử dụng được                     |
| Key có dấu cách        | Không sử dụng trực tiếp được | Sử dụng được                     |
| Key bắt đầu bằng số    | Không sử dụng trực tiếp được | Sử dụng được                     |
| Khuyến nghị            | Thuộc tính có tên cố định    | Dynamic key hoặc key đặc biệt    |
// | */                 
// =====================================================
// 2. TRƯỜNG HỢP 1: TRUY CẬP THUỘC TÍNH QUA BIẾN ĐỘNG
// =====================================================

const bookingReservation = {
roomPrice: 1500000,
roomType: "Deluxe Ocean View"
};

const priceKey = "roomPrice";

// Dot Notation không lấy giá trị của biến priceKey
// bookingReservation.priceKey tìm key có tên "priceKey"
const wrongPrice = bookingReservation.priceKey;

console.log("Dot Notation:", wrongPrice);

// Bracket Notation sử dụng giá trị của biến priceKey
const correctPrice = bookingReservation[priceKey];

console.log("Bracket Notation:", correctPrice);

// =====================================================
// 3. TRƯỜNG HỢP 2: KEY CÓ DẤU GẠCH NGANG
// =====================================================

const roomInformation = {
"room-status": "VACANT",
"room-type": "VIP Suite"
};

// Không thể sử dụng:
// roomInformation.room-status
//
// JavaScript sẽ hiểu roomInformation.room - status
// nên không thể truy cập đúng key "room-status".

const roomStatus = roomInformation["room-status"];
const roomType = roomInformation["room-type"];

console.log("Trạng thái phòng:", roomStatus);
console.log("Loại phòng:", roomType);

// =====================================================
// 4. TRƯỜNG HỢP 3: DUYỆT OBJECT BẰNG for...in
// =====================================================

const hotelRoom = {
roomId: "P101",
roomType: "Deluxe",
roomPrice: 1500000,
status: "VACANT"
};

for (const key in hotelRoom) {
console.log(key + ": " + hotelRoom[key]);
}

// Trong for...in, biến key chứa tên thuộc tính hiện tại.
// Vì vậy phải dùng hotelRoom[key] để truy cập giá trị.
//
// Không được viết:
// hotelRoom.key
//
// Vì hotelRoom.key sẽ tìm thuộc tính có tên "key",
// không phải thuộc tính mà biến key đang chứa.

// =====================================================
// 5. QUY TẮC CLEAN CODE
// =====================================================

/*

1. Dùng Dot Notation khi tên thuộc tính cố định và hợp lệ.

Ví dụ:
hotelRoom.roomId
hotelRoom.status
hotelRoom.roomPrice

2. Dùng Bracket Notation khi tên thuộc tính nằm trong biến.

Ví dụ:
const key = "roomPrice";
hotelRoom[key];

3. Dùng Bracket Notation khi key có ký tự đặc biệt,
   dấu cách hoặc dấu gạch ngang.

Ví dụ:
roomInformation["room-status"];

4. Khi duyệt object bằng for...in, dùng biến key
   với Bracket Notation.

Ví dụ:
for (const key in hotelRoom) {
console.log(hotelRoom[key]);
}

KẾT LUẬN:

Dot Notation:

* Ngắn gọn.
* Dễ đọc.
* Nên dùng mặc định cho thuộc tính tĩnh.

Bracket Notation:

* Linh hoạt hơn.
* Bắt buộc khi truy cập dynamic key.
* Dùng được với key có ký tự đặc biệt, dấu cách
  hoặc dấu gạch ngang.
  */
