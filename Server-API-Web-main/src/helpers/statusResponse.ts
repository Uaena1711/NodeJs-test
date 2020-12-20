export const handleStatus = (
  status: number,
  masssage?: string,
  data?: any
) => {
  switch (status) {
    case 200:
      return {
        status,
        message: masssage || "Thành công",
        data,
      };
    case 302:
      return {
        status,
        message: masssage || "Đã tồn tại",
      };
    case 400:
      return {
        status,
        message: masssage || "Dữ liệu không hợp lệ",
      };
    case 404:
      return {
        status,
        message: masssage || "Không tìm thấy",
      };
    default:
      return { status: 500, masssage: masssage || "Thất bại" };
  }
};
