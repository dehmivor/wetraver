# Font Installation Guide - Pretendard

## Bước 1: Tải font Pretendard
1. Truy cập: https://github.com/orioncactus/pretendard/releases
2. Tải file `Pretendard-X.X.X.zip` (phiên bản mới nhất)
3. Giải nén và copy các file font cần thiết vào thư mục này:

### Các file font cần thiết:
- `Pretendard-Regular.ttf` (font-weight: 400)
- `Pretendard-Medium.ttf` (font-weight: 500) 
- `Pretendard-SemiBold.ttf` (font-weight: 600)
- `Pretendard-Bold.ttf` (font-weight: 700)

## Bước 2: Link fonts vào dự án
Sau khi copy fonts vào thư mục này, chạy lệnh:

```bash
# Cho React Native 0.69+
npx react-native-asset

# Hoặc cho phiên bản cũ hơn
npx react-native link
```

## Bước 3: Rebuild app
```bash
# Android
npx react-native run-android

# iOS  
npx react-native run-ios
```

## Bước 4: Sử dụng font
```javascript
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Pretendard-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16, // 100%
    letterSpacing: 0.64, // 4% of font-size
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
```
