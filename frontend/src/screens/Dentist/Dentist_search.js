import React from 'react';
import SearchPatient from '../../components/search_patient'
import SearchDentist from '../../components/search_dentist'
import SearchEmployee from '../../components/search_employee'

export default function Home() {
  return (
    <div>
    <h3>Tìm kiếm bệnh nhân</h3>
     <SearchPatient/>
     <h3>Tìm kiếm nha sĩ</h3>
     <SearchDentist/>
     <h3>Tìm kiếm nhân viên</h3>
     <SearchEmployee/>
    </div>
  );
}