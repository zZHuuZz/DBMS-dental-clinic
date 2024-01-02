import React from "react";
import { Link } from "react-router-dom";
import "../screen.css/Service.css";

const Services = () => {
  const services = [
    {
      name: "Bọc răng sứ",
      url: "1",
      img: "/images_services/boc-rang-su.png",
    },
    {
      name: "Cấy ghép implant",
      url: "2",
      img: "/images_services/trong-rang-implant.png",
    },
    {
      name: "Niềng răng thẩm mỹ",
      url: "3",
      img: "/images_services/nieng-rang-tham-my.png",
    },
    {
      name: "Mặt dán sứ Veneer",
      url: "4",
      img: "/images_services/mat-dan-su-veneer.png",
    },
    {
      name: "Tẩy trắng răng",
      url: "5",
      img: "/images_services/tay-trang-rang.png",
    },
    {
      name: "Nhổ răng khôn",
      url: "6",
      img: "/images_services/nho-rang-khon.png",
    },
    {
      name: "Bệnh lý nha chu",
      url: "7",
      img: "/images_services/benh-ly-nha-chu.png",
    },
    {
      name: "Điều trị tủy",
      url: "8",
      img: "/images_services/dieu-tri-tuy.png",
    },
    {
      name: "Hàn trám răng",
      url: "9",
      img: "/images_services/han-tram-rang.png",
    },
  ];
  return (
    <div className='services mt-4'>
      <h2 className='mb-4'>Dịch vụ</h2>
      <div className='grid'>
        {services.map((service) => (
          <div
            key={service.name}
            className='service d-flex flex-wrap justify-content: space-between'
          >
            <Link to={`/service/${service.url}`}>
              <img src={service.img} alt={service.name} />
              <br></br>
              <p>{service.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <div style={{ padding: "2%" }}></div>
    </div>
  );
};

export default Services;
