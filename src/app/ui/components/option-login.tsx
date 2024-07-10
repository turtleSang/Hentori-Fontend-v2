interface OptionLoginProps {
  handleOption: (choosen: string) => void;
}

export default function OptionLogin({ handleOption }: OptionLoginProps) {
  return (
    <label>
      <p>Chọn phân quyền</p>
      <select
        className="block w-full border border-brown-1 py-1 px-1 focus:border-yellow-base focus:outline-none rounded-md"
        name=""
        id=""
        onClick={(e) => handleOption(e.currentTarget.value)}
      >
        <option value="M">Quản lý</option>
        <option value="S">Nhân viên</option>
      </select>
    </label>
  );
}
