# Phân tích lỗi & Lập bảng Test Cases

## 1. Phân tích lỗi

### Lỗi 1: Truy cập giá phòng sai cách

Dòng code sai:

```javascript
const basePrice = bookingReservation.priceKey;
```

Biến `priceKey` có giá trị `"roomPrice"`.

Khi sử dụng:

```javascript
bookingReservation.priceKey
```

JavaScript sẽ tìm thuộc tính có tên `"priceKey"` chứ không lấy giá trị của biến `priceKey`.

Object không có thuộc tính `priceKey`, nên kết quả là `undefined`.

Cách sửa:

```javascript
const basePrice = bookingReservation[priceKey];
```

Khi đó chương trình truy cập đúng thuộc tính `roomPrice` và lấy được giá trị `1500000`.

---

### Lỗi 2: Gán `undefined` không xóa thuộc tính

Dòng code sai:

```javascript
bookingReservation.discountCode = undefined;
```

Cách này chỉ thay đổi giá trị của thuộc tính `discountCode` thành `undefined`, nhưng thuộc tính `discountCode` vẫn tồn tại trong object.

Vì vậy:

```javascript
'discountCode' in bookingReservation
```

vẫn trả về:

```text
true
```

Cách sửa là sử dụng toán tử `delete`:

```javascript
delete bookingReservation.discountCode;
```

Sau khi xóa:

```javascript
'discountCode' in bookingReservation
```

sẽ trả về:

```text
false
```

---

### Lỗi 3: Truy cập thuộc tính động sai trong vòng lặp

Dòng code sai:

```javascript
console.log(key + ": " + bookingReservation.key);
```

`key` là biến chứa tên thuộc tính hiện tại.

Sử dụng:

```javascript
bookingReservation.key
```

sẽ tìm thuộc tính có tên `"key"`.

Cách sửa:

```javascript
console.log(key + ": " + bookingReservation[key]);
```

Bracket Notation cho phép sử dụng giá trị của biến `key` để truy cập đúng thuộc tính.

---

## 2. Bảng Test Cases

| Trường hợp kiểm thử                            | Dữ liệu đầu vào                                                                              | Kết quả sai thực tế                                                                                              | Kết quả đúng mong đợi                                                                                                       |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TC01 - Voucher không hợp lệ                    | `isVoucherValid = false`, `priceKey = "roomPrice"`, `roomPrice = 1500000`, `checkInHour = 9` | `basePrice = undefined`, phụ thu = `NaN`, tổng tiền = `NaN`; `discountCode` vẫn tồn tại; vòng lặp in `undefined` | `basePrice = 1500000`, phụ thu = `450000`, tổng tiền = `1950000`; `discountCode` bị xóa hoàn toàn; vòng lặp in đúng giá trị |
| TC02 - Kiểm tra thuộc tính sau khi xóa voucher | `isVoucherValid = false`                                                                     | `'discountCode' in bookingReservation` trả về `true`                                                             | `'discountCode' in bookingReservation` trả về `false`                                                                       |

## 3. Kết luận

Ba lỗi đều liên quan đến cách thao tác với thuộc tính của Object:

* Thuộc tính động qua biến phải dùng Bracket Notation: `obj[key]`.
* Muốn xóa hoàn toàn thuộc tính phải dùng `delete`.
* Trong `for...in`, biến `key` phải được sử dụng với Bracket Notation: `obj[key]`.
