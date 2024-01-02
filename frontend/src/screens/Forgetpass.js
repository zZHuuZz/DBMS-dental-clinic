import React from "react";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBInput} from "mdb-react-ui-kit";


const Forgetpass = () => {
  return (
    <MDBContainer fluid style={{ margin: "40px 10px"}} >
      <MDBRow className="d-flex justify-content-center align-items-center" id='logcontain'>
        <MDBCol md="6" className="mx-auto">
          <MDBCard>
            <MDBCardBody className="text-black d-flex flex-column justify-content-center" id='logcontain'>
              <MDBRow>
              <MDBRow>
                <MDBCol md="10">
                    <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    size="lg"
                    id="forgetemail"
                    type="email"
                    />
                </MDBCol>

                <MDBCol md="2">
                    <MDBBtn className="ms-2" color="warning" size="sm" style={{height:'42px',lineHeight:'42px'}}>
                    Gửi Lại
                    </MDBBtn>
                </MDBCol>
                </MDBRow>
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

export default Forgetpass;
