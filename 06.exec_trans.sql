USE QLPKNK
-- //0.Người dùng khách (người dùng chưa đăng nhập) 
--//-------------------
-- 0.1/Có quyền đăng kí tài khoản (gọi giao tác TaoTaiKhoanBenhNhan) 
EXEC TaoTaiKhoanBenhNhan
    @HoTen = N'NGUYEN HANG',
    @SDT = '0123455718',
    @GioiTinh = N'Nam',
    @NgaySinh = '1990-01-01',
    @DiaChi = N'Địa chỉ BN mới',
    @MatKhau = '12345678';
GO

SELECT *
FROM NHANVIEN

EXEC TaoTaiKhoanNhanVien
    @HoTen = N'NGUYEN VAN BAN',
    @SDT = '0123455628',
    @GioiTinh = N'Nam',
    @DiaChi = N'6/1B Tran Phu P4, Q5, tpHCM',
    @TinhTrangHoatDong = N'Còn làm',
    @ViTri = N'Thu Ngân',
    @MatKhau = '12345678';
GO
EXEC CapNhatTinhTrangHoatDongNhanVien @MaNhanVien = 12, @TinhTrangHoatDong ='Nghỉ Làm';
SELECT *
FROM NHANVIEN
SELECT * 
From QTV
SELECT *
FROM NHASI
EXEC TaoTaiKhoanNhaSi
    @HoTen = N'NGUYEN THU HONG',
    @SDT = '0123283048',
    @GioiTinh = N'Nữ',
    @NgaySinh = '1990-01-01',
    @DiaChi = N'7/1B Tran Phu P4, Q5, tpHCM',
    @ChuyenMon = N'Răng hàm mặt',
    @BangCap = N'Tiến Sĩ',
    @MatKhau = '12345678';
GO

EXEC QuenMatKhau @SDT = "0123456778", @NewPassword = "11223344";

SELECT *
FROM BENHNHAN
EXEC XoaTaiKhoan
@SDT = '0123455776'
--//-------------------
-- 0.2/Có quyền đăng nhập vào tài khoản (gọi giao tác DangNhap)
EXEC DangNhap @UserName = '0123456788', @Password = '12345678';
EXEC DangNhap @UserName = '0123456781', @Password = '12345678';
EXEC DangNhap @UserName = '0123456777', @Password = '12345678';
EXEC DangNhap @UserName = '0337432114', @Password = '12345678';
--//-------------------
-- //1.Bệnh nhân (đã có tài khoản) 
-- 1.1/Có quyền đăng nhập vào tài khoản (gọi giao tác DangNhap) : WROTE
-- 1.2/Có quyền đặt lịch hẹn: 
-- Được quyền chọn ngày giờ khám (gọi giao tác ChonThoiGianKham). 
-- Được quyền chọn nha sĩ khám (gọi giao tác ChonNhaSiKham). 
GO
--select * from LICHHEN
--select * FROM LICHLAMVIEC
EXEC DatLichHen
    @Ngay = '2023-12-20',
    @SDT = '0123456780',
    @MaNhaSi = 100,
    @CaDangKy = N'Chiều';
--EXEC DatLichHen
--    @Ngay = '2023-11-13',
--    @SDT = '0123456780',
--    @MaNhaSi = 100,
--    @CaDangKy = N'Chiều';
--EXEC DatLichHen
--    @Ngay = '2023-11-13',
--    @SDT = '0123456787',
--    @MaNhaSi = 100,
--    @CaDangKy = N'Chiều';
GO
-- Có quyền được xem thông tin cá nhân (gọi giao tác XemThongTinCaNhan) bao gồm họ tên, ngày sinh, địa chỉ, số điện thoại, giới tính. 
EXEC XemThongTinCaNhanBenhNhan @SDT = '0123456782';

GO
-- Có quyền được xem thông tin của nha sĩ (gọi giao tác XemThongTinNhaSi). 
EXEC XemThongTinNhaSi @MaNhaSi = 100;

-- Có quyền được xem thông tin cá nhân (gọi giao tác XemThongTinCaNhan) bao gồm họ tên, ngày sinh, địa chỉ, số điện thoại, giới tinh. (NHÂN VIÊN)
EXEC XemThongTinCaNhanNhanVien @SDT = "0123456788";

-- Có quyền được cập nhật thông tin cá nhân của bệnh nhân (gọi giao tác CapNhatThongTin) 
EXEC CapNhatThongTin --Bệnh nhân không tồn tại trong hệ thống. Cập nhật không thành công
    @SDT = '0123456786',
    @HoTen = N'Bệnh nhân cập nhật',
    @GioiTinh = N'Nam',
    @NgaySinh = '2020-01-01',
    @DiaChi = 'Địa chỉ BN Cập nhật'

EXEC CapNhatThongTin --Cập nhật thông tin thành công.
    @SDT = '0123456782',
    @HoTen = N'Bệnh nhân cập nhật',
    @GioiTinh = N'Nam',
    @NgaySinh = '2020-01-01',
    @DiaChi = 'Địa chỉ BN Cập nhật'
GO
-- Có quyền được xem hồ sơ bệnh án (lịch sử khám chữa bệnh) được nha sĩ ghi nhận lại trong quá trình điều trị (gọi giao tác XemHoSoBenhAn) 
EXEC XemHoSoBenhAn @SDT = '0123456781'

EXEC XemThongTinHoaDon @SDT = '0123456781', @STTLichSuKB = 1;
EXEC XemTrangThaiThanhToan @SDT = '0123456781', @STTLichSuKB = 1;

EXEC CapNhatLichLamViec
    @MaNhaSi = 100,
    @Ngay = '2023-12-20',
    @CaDangKy = N'Chiều'

SELECT *
FROM LICHHEN
EXEC GhiNhanDatKhamBenh
    @SDT = '0123456780',
    @NgayGioKham = '2023-11-29 15:00:00.000',
    @TenNhaSi = N'Nha sĩ 1'
SELECT *
FROM LICHHEN


EXEC GhiNhanHoSoBenhAn
    @SDT = '0123456780',
    @NgayGioKham = '2023-11-14',
    @HoTenNhaSi = N'Nha sĩ 2'

EXEC ThongBaoLichKham

GO
EXEC XemDanhMucThuoc;
EXEC XemDanhSachLichHen;
EXEC XemThongTinCaNhanNhanVien @SDT = '0123456788';

--Cập nhật từ chưa thanh toán sang đã thanh toán
EXEC ThayDoiTrangThaiThanhToan 
 @SDT = '0123456781',
    @STTLichSuKB = 1
SELECT *
FROM HOADON
SELECT *
FROM BENHNHAN
GO
SELECT *
FROM LICHSUKHAMBENH
EXEC QuanLyTaiKhoan
@HoTen = N'Benh nhan 3', 
@SDT  = '0123455775', 
@GioiTinh = N'Nữ', 
@NgaySinh = '2001-09-23', 
@DiaChi = N'Dia chi Benh Nhan 3', 
@MatKhau = '012345678',
@TinhTrangHoatDong = NULL,
@ViTri = NULL,
@ChuyenMon = NULL,
@BangCap  = NULL,
@Email  = NULL,
@TinhTrangThanhToan  = NULL
SELECT *
FROM BENHNHAN
GO
EXEC DoiMatKhau 
@SDT = '0123456780'
, @OldPassword = 'qwe12345'
, @NewPassword = '12345678';
GO
EXEC XemThongTinQTV 
@SDT = '0337432114'
GO
SELECT *
FROM NHASI
EXEC CapNhatThongTinNhaSi
@SDT = '0123456785',
    @HoTen = N'Nha sĩ 2',
    @GioiTinh = N'Nam',
    @NgaySinh = '1984-02-02 00:00:00.000',
    @DiaChi = 'Địa chỉ BS3',
    @ChuyenMon = N'Chuyên môn 3',
    @BangCap = N'TS'

SELECT *
FROM NHANVIEN
EXEC CapNhatThongTinNhanVien
    @SDT = '0123456798',
    @HoTen = N'Nguyễn Văn A',
    @GioiTinh= N'Nam',
    @DiaChi= N'123 Cao Thắng, HCMC',
    @ViTri ='Receptionist'

SELECT *
FROM QTV
EXEC CapNhatThongTinQTV
@SDT = '0337432114',
@HoTen = 'Phạm Thị Như Yến',
@Email = 'ptnyen21@vp.fitus.edu.vn'

SELECT *
FROM LICHHEN
EXEC CapNhatTrangThaiLichHen
@MaLichHen = 11,
    @TrangThaiMoi = N'Đã hủy'
    
SELECT *
FROM LICHHEN
EXEC XoaLichHen
@MaLichHen = 11

SELECT *
FROM DONTHUOC
EXEC XemDonThuoc
@MaDonThuoc = 2

select *
from THUOC

SELECT *
FROM BENHNHAN
EXEC XoaTaiKhoan
@SDT = '0123455776'

SELECT *
FROM DONTHUOC
SELECT *
FROM LICHSUKHAMBENH
EXEC CapNhatHoSoBenhAn
    @STT = 3,
    @MaBenhNhan = 1000,
    @MaNhaSiKham = 101,
    @GhiChu = N'Ghi chú 2',
    @MaThuoc = '101',
    @NgaySuDung = '2023-01-31 00:00:00.000',
    @LieuDung = N'2 viên/ngày',
    @SoLuong = 12
SELECT *
FROM LICHSUKHAMBENH
WHERE STT = 1
SELECT *
FROM DICHVUSUDUNG
WHERE STTLichSuKB =1
SELECT *
FROM DONTHUOC
WHERE STTLichSuKB =1
SELECT *
FROM HOADON
EXEC LapHoaDonThanhToan
    @STTLichSuKB = 1

select *
from DICHVU

-- Execute the stored procedure to add a new drug to the inventory
EXEC QuanLyKhoThuoc
    @MaThuoc = 101,
    @NgayHetHan = '2023-12-31',
    @TenThuoc = 'Paracetamol',
    @DonViTinh = 'Tablet',
    @DonGia = 10,
    @ChiDinh = 'Pain relief',
    @SoLuongTonKho = 100,
    @ThaoTac = 'ThemMoi';

EXEC QuanLyKhoThuoc
    @MaThuoc = 107,
    @NgayHetHan = '2023-12-10',
    @TenThuoc = 'Aspirin',
    @DonViTinh = 'Viên',
    @DonGia = 10,
    @ChiDinh = 'Giảm đau',
    @SoLuongTonKho = 100,
    @ThaoTac = 'ThemMoi';

-- Execute the stored procedure to update drug information in the inventory
EXEC QuanLyKhoThuoc
    @MaThuoc = 101,
    @NgayHetHan = '2023-12-31',
    @TenThuoc = 'Paracetamol',
    @DonViTinh = 'Tablet',
    @DonGia = 12,
    @ChiDinh = 'Pain relief',
    @SoLuongTonKho = 150,
    @ThaoTac = 'CapNhat';

EXEC XoaThuoc
    @MaThuoc = 6,
    @NgayHetHan = '2026-01-01';
-- Execute the stored procedure to view current inventory status
EXEC QuanLyKhoThuoc @ThaoTac = 'XemTonKho';

EXEC DoiMatKhau @SDT = '0123456780'
, @OldPassword = '12345678'
, @NewPassword = 'qwe12345';

