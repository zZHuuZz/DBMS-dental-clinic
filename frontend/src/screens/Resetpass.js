import React from "react";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBInput} from "mdb-react-ui-kit";


const Resetpass = () => {
  return (
    <MDBContainer fluid style={{ margin: "40px 10px"}} >
      <MDBRow className="d-flex justify-content-center align-items-center" id='logcontain'>
        <MDBCol md="6" className="mx-auto">
          <MDBCard>
            <MDBCardBody className="text-black d-flex flex-column justify-content-center" id='logcontain'>
              <MDBRow>
              <MDBRow>
                <MDBCol md="12">
                    <MDBInput
                    wrapperClass="mb-4"
                    label="Mật khẩu mới"
                    size="lg"
                    id="resetpass"
                    type="password"
                    />
                </MDBCol>
                </MDBRow>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Nhập lại mật khẩu"
                    size="lg"
                    id="resetpass1"
                    type="password"
                  />
                </MDBCol>
              </MDBRow>
              
              <div className="d-flex justify-content-center pt-3">
                <MDBBtn className="ms-2" color="warning" size="lg">
                  Xác nhận
                </MDBBtn>
              </div>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Resetpass;
