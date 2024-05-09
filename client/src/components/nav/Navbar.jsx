import { ShoppingOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "./navbar.scss";
import Logo from "../../assets/logo/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  // const { logout, currentUser } = useUserStore();

  const navigate = useNavigate();
  const itemsLeft = [
    {
      label: "Trang Chủ",
      key: "",
      icon: <HomeOutlined />,
    },
    {
      label: "Giỏ Hàng",
      key: "links",
      icon: <ShoppingOutlined />,
      hidden: true
      // hidden: currentUser ? false : true,
    },
    {
      label: "Thông Tin Cá Nhân",
      key: "profile",
      icon: <UserOutlined />,
      hidden: true
      // hidden: currentUser ? false : true,
    },
  ];
  const onClick = (e) => {
    navigate(e.key);
  };
  const Logout=async ()=>{
    await logoutAPI().then(()=>{
      logout()
      navigate("/")
    })
  }
  return (
    <div className="flex items-center justify-between w-full h-[60px] gap-[20px] px-4 fixed top-0 bg-white z-30 shadow-md">
      <div className="flex items-center flex-1">
        <NavLink to={"/"}>
          <img src={Logo} className="w-[60px] h-[60px]" alt="Logo" />
        </NavLink>
        <Menu
          onClick={onClick}
          mode="horizontal"
          items={itemsLeft.filter((item) => !item.hidden)}
          className="text-[14px] ml-4 flex-1"
          style={{ borderBottom: "none" }}
        />
      </div>
      <div>
        <button
          className={`mr-2 bg-[#283848] text-white px-4 py-2 rounded-[8px] hover:bg-[#18bc9c] hidden`}
          onClick={Logout}
        >
          Đăng xuất
        </button>
        <button
          className={`mr-2 bg-[#283848] text-white px-4 py-2 rounded-[8px] hover:bg-[#18bc9c] hidden  `}
          onClick={() => navigate("/register")}
        >
          Đăng ký
        </button>
        <button
          className={`bg-gray-500 text-white px-4 py-2 rounded-[8px] hover:bg-[#18bc9c]`}
          onClick={() => navigate("/login")}
          disabled
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default NavBar;
