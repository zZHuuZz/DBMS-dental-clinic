import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [service, setService] = useState(null);
  const { number /* Extract service ID from route parameters */ } = useParams();

  const fetchService = async () => {
    const serviceId = number;

    const response = await fetch(
      `http://localhost:5000/api/services/getServiceById/${serviceId}`
    ); // Fetch service data
    console.log(response);
    const serviceData = await response.json();

    if (serviceData) {
      setService(serviceData);
    }
  };

  useEffect(() => {
    fetchService(); // Fetch service data on component mount
  }, []); //Kệ cái warning này đi nhé

  if (!service) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div>
      <h2 className='mx-auto p-1 text-center mt-3 mb-5 justify-content-center'>
        {service.TenDichVu}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        class={service.TenDichVu ? "left-right" : "right-left"}
      >
        {/* <p>MaDichVu: {service.MaDichVu}</p> */}
        <table
          class='table table-bordered mb-5'
          style={{ width: "55%", marginLeft: "5%", fontSize: "20px" }}
        >
          <thead>
            <tr className='table-info'>
              <th>Mô tả</th>
              <th style={{ width: "20%" }}>Đơn vị tính</th>
              <th style={{ width: "20%" }}>Đơn giá </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{service.MoTa}</td>
              <td>{service.DonViTinh} </td>
              <td>{service.DonGia.toLocaleString()} VNĐ</td>
            </tr>
          </tbody>
        </table>
        <img
          src={`/images_services/B&A/${service.MaDichVu}.png`}
          alt=''
          className='me-5'
          style={{ objectFit: "contain", objectPosition: "0px 0px" }}
        ></img>
      </div>
    </div>
  );
};

export default ServiceDetails;
