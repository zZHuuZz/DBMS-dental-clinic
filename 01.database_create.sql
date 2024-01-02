-- USE MASTER
-- GO
IF DB_ID('QLPKNK') IS NOT NULL
BEGIN
DROP DATABASE QLPKNK
END
create database QLPKNK
GO
USE QLPKNK
GO
--1/Tạo bảng quản trị viên: 
--By default, the starting value = 1, and increment by 1 for each new record.
IF OBJECT_ID('dbo.QTV', 'U') IS NOT NULL 
  DROP TABLE dbo.QTV;
create table QTV
(
	MaNhanVien int unique not null identity(1,1),
	HoTen nvarchar(50) not null,
	SDT varchar(10) unique not null,
	Email varchar(255) unique not null,
	MatKhau varchar(8) not null,
	constraint PK_QTV primary key (MaNhanVien)
)

GO
--2/Tạo bảng nhân viên:
--By default, the starting value = 10, and increment by 1 for each new record.
IF OBJECT_ID('dbo.NHANVIEN', 'U') IS NOT NULL 
  DROP TABLE dbo.NHANVIEN;
create table NHANVIEN
(
	MaNhanVien int unique not null identity(10,1),
	Hoten nvarchar(50) not null,
	SDT varchar(10) unique not null,
	GioiTinh nvarchar(5) not null check (GioiTinh = N'Nam' or GioiTinh = N'Nữ'),
	DiaChi nvarchar(50) not null,
	TinhTrangHoatDong nvarchar(20) not null check (TinhTrangHoatDong = N'Còn làm' or TinhTrangHoatDong = N'Nghỉ làm'),
	ViTri nvarchar(50) not null,
	MatKhau varchar(8) not null,
	constraint PK_NHANVIEN primary key (MaNhanVien)
)

GO
--3/Tạo bảng nha sĩ:
--By default, the starting value = 100, and increment by 1 for each new record.
IF OBJECT_ID('dbo.NHASI', 'U') IS NOT NULL 
  DROP TABLE dbo.NHASI;
create table NHASI
(
	MaNhaSi int unique not null identity(100,1),
	HoTen nvarchar(50) not null,
	SDT varchar(10) unique not null,
	GioiTinh nvarchar(5) not null check (GioiTinh = N'Nam' or GioiTinh = N'Nữ'),
	NgaySinh datetime not null,
	DiaChi nvarchar(50) not null,
	ChuyenMon nvarchar(50) not null,
	BangCap nvarchar(50) not null,
	MatKhau varchar(8) not null,
	constraint PK_NHASI primary key (MaNhaSi)
)

--4/Tạo bảng bệnh nhân:
--By default, the starting value = 1000, and increment by 1 for each new record.
IF OBJECT_ID('dbo.BENHNHAN', 'U') IS NOT NULL 
  DROP TABLE dbo.BENHNHAN;
create table BENHNHAN
(
	MaBenhNhan int unique not null identity(1000,1),
	HoTen nvarchar(50) not null,
	SDT varchar(10) unique not null,
	GioiTinh nvarchar(5) not null check (GioiTinh = N'Nam' or GioiTinh = N'Nữ'),
	NgaySinh datetime not null,
	DiaChi nvarchar(50) not null,
	MatKhau varchar(8) not null,
	constraint PK_BENHNHAN primary key (MaBenhNhan)
)

GO
--5/Tạo bảng Nha sĩ đăng ký lịch làm việc:
IF OBJECT_ID('dbo.LICHLAMVIEC', 'U') IS NOT NULL 
  DROP TABLE dbo.LICHLAMVIEC;
create table LICHLAMVIEC
(
	STT int unique not null identity(1,1),
	Ngay date not null,
	MaNhaSi int not null,
	CaDangKy nvarchar(50) not null,
	constraint PK_LICHLAMVIEC primary key (STT)
)

--6/Tạo bảng Lịch hẹn:
IF OBJECT_ID('dbo.LICHHEN', 'U') IS NOT NULL 
  DROP TABLE dbo.LICHHEN;
create table LICHHEN
(
	MaLichHen int unique not null identity(1,1),
	NgayGioKham datetime not null,
	MaBenhNhan int not null,
	MaNhaSi int not null,
	TrangThaiLichHen nvarchar(50) not null check (TrangThaiLichHen = N'Đã đặt' or TrangThaiLichHen = N'Đã hủy'),
	constraint PK_LICHHEN primary key (MaLichHen)
)

--7/Tạo bảng Hồ sơ Lịch sử khám bệnh:
IF OBJECT_ID('dbo.LICHSUKHAMBENH', 'U') IS NOT NULL 
  DROP TABLE dbo.LICHSUKHAMBENH;
create table LICHSUKHAMBENH
(
	STT int IDENTITY(1,1) NOT NULL,
	MaBenhNhan int not null,
	MaNhaSiKham int not null,
	GhiChu nvarchar(50),
	NgayKham datetime not null,
	constraint PK_LICHSUKHAMBENH primary key (STT, MaBenhNhan)
)

--8/Tạo bảng danh sách thuốc:
IF OBJECT_ID('dbo.THUOC', 'U') IS NOT NULL 
  DROP TABLE dbo.THUOC;
create table THUOC
(
	MaThuoc int not null,
	NgayHetHan datetime not null,
	TenThuoc nvarchar(50) not null,
	DonViTinh nvarchar(50) not null,
	DonGia int not null,
	ChiDinh nvarchar(50),
	SoLuongTonKho int not null,
	constraint PK_THUOC primary key (MaThuoc, NgayHetHan)
)

--9/Tạo bảng đơn thuốc của bệnh nhân 
IF OBJECT_ID('dbo.DONTHUOC', 'U') IS NOT NULL 
  DROP TABLE dbo.DONTHUOC;
create table DONTHUOC
(
	MaDonThuoc int unique not null identity(1,1),
	MaThuoc int not null,
	MaBenhNhan int not null,
	NgaySuDung datetime not null,
	NgayHetHan datetime not null,
	LieuDung nvarchar(50) not null,
	STTLichSuKB int not null,
	SoLuong int not null,
	constraint PK_DONTHUOC primary key (MaDonThuoc)
)

--10/Tạo bảng danh mục dịch vụ
IF OBJECT_ID('dbo.DICHVU', 'U') IS NOT NULL 
  DROP TABLE dbo.DICHVU;
create table DICHVU
(
	MaDichVu int unique not null identity(1,1),
	TenDichVu nvarchar(50) not null,
	MoTa nvarchar(255) not null,
	DonGia int not null,
	DonViTinh nvarchar(50) not null
	constraint PK_DICHVU primary key (MaDichVu)
)

--11/Tạo bảng danh sách dịch vụ sử dụng của bệnh nhân
IF OBJECT_ID('dbo.DICHVUSUDUNG', 'U') IS NOT NULL 
  DROP TABLE dbo.DICHVUSUDUNG;
create table DICHVUSUDUNG
(
	MaPhieuDVSD int unique not null identity(1,1),
	NgaySuDung datetime not null,
	STTLichSuKB int not null,
	MaBenhNhan int not null,
	MaDichVu int not null,
	SoLuong int not null default 0 ,
	constraint PK_DICHVUSUDUNG primary key (MaPhieuDVSD)
)

--12/Tạo bảng hóa đơn
IF OBJECT_ID('dbo.HOADON', 'U') IS NOT NULL 
  DROP TABLE dbo.HOADON;
create table HOADON
(
	MaHoaDon int unique not null identity(1,1),
	MaBenhNhan int not null,
	STTLichSuKB int not null,
	MaPhieuDVSD int not null,
	TongTien int not null,
	TinhTrangThanhToan nvarchar(50) not null check (TinhTrangThanhToan = N'Đã thanh toán' or TinhTrangThanhToan = N'Chưa thanh toán'),
	NgayThanhToan datetime not null,
	MaDonThuoc int not null,
	constraint PK_THANHTOAN primary key (MaHoaDon, MaBenhNhan, STTLichSuKB)
)

-- Tạo khóa ngoại
alter table LICHLAMVIEC
add
constraint FK_LICHLAMVIEC_NHASI
foreign key (MaNhaSi)
references NHASI

alter table LICHHEN
add
constraint FK_LICHHEN_NHASI
foreign key (MaNhaSi)
references NHASI,
constraint FK_LICHHEN_BENHNHAN
foreign key (MaBenhNhan)
references BENHNHAN

alter table LICHSUKHAMBENH
add
constraint FK_LICHSUKHAMBENH_NHASI
foreign key (MaNhaSiKham)
references NHASI,
constraint FK_LICHSUKHAMBENH_BENHNHAN
foreign key (MaBenhNhan)
references BENHNHAN

alter table DONTHUOC
add
constraint FK_DONTHUOC_THUOC
foreign key (MaThuoc, NgayHetHan)
references THUOC,
constraint FK_DONTHUOC_LICHSUKHAMBENH
foreign key (STTLichSuKB, MaBenhNhan)
references LICHSUKHAMBENH

alter table DICHVUSUDUNG
add
constraint FK_DICHVUSUDUNG_DICHVU
foreign key (MaDichVu)
references DICHVU,
constraint FK_DICHVUSUDUNG_LICHSUKHAMBENH
foreign key (STTLichSuKB, MaBenhNhan)
references LICHSUKHAMBENH

alter table HOADON
add
constraint FK_HOADON_DICHVUSUDUNG
foreign key (MaPhieuDVSD)
references DICHVUSUDUNG,
constraint FK_HOADON_LICHSUKHAMBENH
foreign key (STTLichSuKB, MaBenhNhan)
references LICHSUKHAMBENH,
constraint FK_HOADON_DONTHUOC
foreign key (MaDonThuoc)
references DONTHUOC
GO
