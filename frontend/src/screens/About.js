import React from "react";
import Banner from "../components/banner.js";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <main>
      <Banner />
      <Container className='mx-auto p-1'>
        <h2 className='text-dark uppercase'>Giới thiệu</h2>
        <p>Chào mừng quý khách đến với Phòng Khám Nha Khoa Chigsa!</p>
        <p className='text-dark'>
          Tại phòng khám của chúng tôi, chúng tôi chú trọng vào việc tạo ra một
          môi trường thoải mái và an ninh, giúp bệnh nhân cảm thấy thoải mái từ
          khi bước vào. Với đội ngũ bác sĩ và nhân viên y tế giàu kinh nghiệm,
          chúng tôi cam kết mang đến cho bạn những dịch vụ chăm sóc nha khoa
          hàng đầu, từ những kiểm tra định kỳ đến các phương pháp điều trị tiên
          tiến. Đồng thời, chúng tôi sử dụng công nghệ tiên tiến và trang thiết
          bị hiện đại nhất để đảm bảo chẩn đoán chính xác và điều trị hiệu quả.{" "}
          <br></br>
          Chất lượng phục vụ của chúng tôi không chỉ là về việc duy trì sức khỏe
          nha khoa, mà còn là về việc tạo ra một trải nghiệm khám và điều trị
          thú vị và thoải mái. Chúng tôi luôn lắng nghe và tôn trọng mong muốn
          và nhu cầu của từng bệnh nhân, đồng hành cùng họ trên hành trình duy
          trì sức khỏe nha khoa và làm đẹp nụ cười.
        </p>
        <h3 className='text-dark mt-3 uppercase'>Dịch vụ nổi bật</h3>
        <p>
          Phòng Khám Nha Khoa của chúng tôi cung cấp một loạt các dịch vụ tiêu
          biểu với mục tiêu cải thiện và duy trì sức khỏe nha khoa của bệnh
          nhân.
        </p>
        <ul className='list-unstyled'>
          <ServiceDetail
            title='Niềng Răng Thẩm Mỹ'
            description='Chúng tôi cung cấp dịch vụ niềng răng thẩm mỹ nhằm điều chỉnh vị trí của răng, giúp tạo ra một nụ cười đều đặn và hài hòa.'
          />

          <ServiceDetail
            title='Cấy Ghép Implant'
            description='Cấy ghép implant là quy trình thay thế răng mất mà không cần đến răng giả. Chúng tôi sử dụng các kỹ thuật hiện đại để đảm bảo sự an toàn và hiệu quả của quá trình này.'
          />

          <ServiceDetail
            title='Bọc Răng Sứ'
            description='Dịch vụ bọc răng sứ giúp cải thiện hình dáng và màu sắc của răng, mang lại vẻ ngoại hình tự tin và tự nhiên.'
          />

          <ServiceDetail
            title='Mặt Dán Sứ Veneer'
            description='Mặt dán sứ Veneer là một phương pháp thẩm mỹ nâng cao, giúp che đi nhược điểm của răng và tạo ra một nụ cười trắng sáng, đều đặn.'
          />

          <ServiceDetail
            title='Điều Trị Tuỷ'
            description='Chúng tôi cung cấp các dịch vụ điều trị tuỷ để xử lý vấn đề về tuỷ răng, bảo đảm rằng bệnh nhân có thể duy trì sức khỏe nha khoa và giảm đau đớn.'
          />
        </ul>
        <h3 className='text-dark mt-3 uppercase'>Đội ngũ nha sĩ</h3>
        <p>
          Đội ngũ Nha sĩ tại Phòng Khám Nha Khoa của chúng tôi tự hào là những
          chuyên gia có kinh nghiệm và kiến thức sâu rộng trong lĩnh vực nha
          khoa. Chúng tôi cam kết mang đến cho bệnh nhân sự phục vụ chuyên
          nghiệp, tận tâm và chất lượng cao. Dưới đây là một sơ lược về đội ngũ
          nha sĩ của chúng tôi:
        </p>
        <ul className='list-unstyled'>
          <ServiceDetail
            title='Kinh Nghiệm Phong Phú'
            description='Đội ngũ nha sĩ của chúng tôi có nhiều năm kinh nghiệm trong việc thực hiện các phương pháp điều trị nha khoa đa dạng. Sự chuyên nghiệp và khả năng giải quyết vấn đề của họ đã giúp hàng ngàn bệnh nhân đạt được nụ cười khỏe mạnh và đẹp tự tin.'
          />

          <ServiceDetail
            title='Nâng Cao Kỹ Năng Chuyên Môn'
            description='Chúng tôi liên tục đầu tư vào việc nâng cao kỹ năng và kiến thức của đội ngũ nha sĩ thông qua các khóa đào tạo và cập nhật công nghệ mới nhất. Điều này đảm bảo rằng họ có thể áp dụng những phương pháp điều trị tiên tiến nhất và hiệu quả nhất cho bệnh nhân.'
          />

          <ServiceDetail
            title='Tận Tâm Và Chu Đáo'
            description='Nha sĩ của chúng tôi không chỉ là những chuyên gia về chuyên môn mà còn là những người tận tâm, chu đáo với bệnh nhân. Họ luôn lắng nghe và tìm hiểu về nhu cầu, mong muốn của từng người để đảm bảo rằng mọi liệu pháp điều trị được thiết kế đặc biệt cho từng trường hợp.'
          />

          <ServiceDetail
            title='Giao Tiếp Hiệu Quả'
            description='Đội ngũ nha sĩ của chúng tôi rất tận tâm trong việc giải thích các quy trình điều trị và tạo ra một không gian thoải mái để bệnh nhân có thể thoải mái chia sẻ mọi lo ngại và câu hỏi'
          />
        </ul>
        <p>
          Chúng tôi tự tin rằng với đội ngũ nha sĩ giàu kinh nghiệm và sự cam
          kết với chất lượng, chúng tôi có thể đáp ứng mọi nhu cầu nha khoa của
          bệnh nhân và mang đến cho họ nụ cười khỏe mạnh và đẹp tự tin.
        </p>
        <p>Chúng tôi rất hân hạnh được phục vụ bạn.</p>
      </Container>
    </main>
  );
};

const ServiceDetail = ({ title, description }) => {
  return (
    <li className='mb-1 px-4'>
      <h5 style={{ color: "#04364a" }}>{title}</h5>
      <p>{description}</p>
    </li>
  );
};

export default About;
