# Phân tích lỗi & Lập bảng Test Cases

## 1. Phân tích lỗi

### Dòng lệnh bị lỗi

```javascript
const basePrice = bookingReservation.priceKey;
```

### Nguyên nhân

Biến `priceKey` có giá trị là `"roomPrice"`.

Khi sử dụng Dot Notation:

```javascript
bookingReservation.priceKey
```

JavaScript sẽ tìm thuộc tính có tên chính xác là `priceKey` trong object `bookingReservation`.

Tuy nhiên, object chỉ có thuộc tính:

```javascript
roomPrice: 1500000
```

không có thuộc tính `priceKey`, nên kết quả trả về là:

```javascript
undefined
```

Sau đó:

```javascript
surcharge = basePrice * 0.3;
```

sẽ trở thành:

```javascript
undefined * 0.3
```

kết quả là `NaN`.

Do đó:

```javascript
const totalAmount = basePrice + surcharge;
```

cũng cho kết quả `NaN`.

### Cách sửa

Vì tên thuộc tính được lưu trong biến `priceKey`, cần sử dụng Bracket Notation:

```javascript
const basePrice = bookingReservation[priceKey];
```

Khi đó JavaScript lấy giá trị của `priceKey` là `"roomPrice"` và truy cập đúng:

```javascript
bookingReservation["roomPrice"]
```

Kết quả:

```text
1500000
```

## 2. Bảng Test Cases

| Trường hợp kiểm thử          | Dữ liệu đầu vào                                                     | Kết quả sai thực tế                                         | Kết quả đúng mong đợi                                            |
| ---------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------- |
| TC01 - Nhận phòng sớm        | `priceKey = "roomPrice"`, `roomPrice = 1500000`, `checkInHour = 9`  | `basePrice = undefined`, phụ thu = `NaN`, tổng tiền = `NaN` | Giá phòng = `1500000`, phụ thu = `450000`, tổng tiền = `1950000` |
| TC02 - Nhận phòng sau 12 giờ | `priceKey = "roomPrice"`, `roomPrice = 1500000`, `checkInHour = 14` | `basePrice = undefined`, tổng tiền = `NaN`                  | Giá phòng = `1500000`, phụ thu = `0`, tổng tiền = `1500000`      |

## 3. Kết luận

Lỗi xảy ra do sử dụng Dot Notation để truy cập thuộc tính động. Khi tên thuộc tính được lưu trong một biến, phải sử dụng Bracket Notation `obj[dynamicKey]` để lấy đúng giá trị thuộc tính.
