import axios from "axios";

export async function GetServerSideProps() {
    try {
      const response = await axios.get('https://example.com/invalid-endpoint');
      return {
        props: {
          data: response.data,
        },
      };
    } catch (error:any) {
      let errorMessage = 'Đã xảy ra lỗi khi gọi API.';
      let statusCode = 500;
  
      if (error.response) {
        // Lỗi do phản hồi từ API
        statusCode = error.response.status;
        errorMessage = `Mã lỗi: ${statusCode} - ${error.response.statusText}`;
      } else if (error.request) {
        // Lỗi do không nhận được phản hồi từ API
        errorMessage = 'Không thể kết nối đến API.';
      } else {
        // Lỗi khác
        errorMessage = 'Đã xảy ra lỗi không xác định.';
      }
  
      return {
        props: {
          error: {
            message: errorMessage,
            statusCode,
          },
        },
        // Nếu có lỗi, chuyển hướng về trang 404 hoặc 500 tùy theo mã lỗi
        redirect: statusCode === 404 ? { destination: '/404', permanent: false } : { destination: '/500', permanent: false },
      };
    }
  }