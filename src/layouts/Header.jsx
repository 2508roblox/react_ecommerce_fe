import { Link, useParams } from "react-router-dom";
import FormSearch from "../components/FormSearch";
import URL_PATH from '../config/UrlPath';

function Header() {
  const param = useParams();
  if (localStorage.length > 0) {
    var hasLogin = localStorage.getItem("hasLogin");
    var userName = localStorage.getItem("userName");
  }
  const handleLogout = () => {
    alert('Đăng xuất thành công');
    localStorage.removeItem('hasLogin');
    localStorage.removeItem('userName');
  };
  const menuLists = [
    {name:'Trang chủ',link:'/'},
    {name:'Danh mục',link:'/cua-hang'},
    {name:'Tin tức',link:'/bai-viet'},
  ];
  const menuListLogin = [
    {name:'Đăng nhập',link:'/dang-nhap'},
  ];
  const menuLogin = menuListLogin.map((menu) => {
    return(
      <li className="nav-item" key={menu.name}>
        <Link
          className={`nav-link
        ${param['*'] === URL_PATH.concat(menu.link) ? "active" : ''}
        `}
          to={URL_PATH.concat(menu.link)}
        >
        <i className="fas fa-user me-1 text-gray fw-normal"></i>
          {menu.name}
        </Link>
      </li>
    );
  });
  const menuList = menuLists.map((menu) => {
    return(
      <li className="nav-item" key={menu.name}>
        <Link
          className={`nav-link
        ${param['*'] === URL_PATH.concat(menu.link) ? "active" : ''}
        `}
          to={URL_PATH.concat(menu.link)}
        >
          {menu.name}
        </Link>
      </li>
    );
  });
  return (
    <section>
      <header className="header bg-black">
        <div className="container px-lg-3">
          <nav className="navbar navbar-expand-lg text-white text-sm navbar-light py-0 w-100 px-lg-0">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <span className="me-3 text-white"><i className="fas fa-mobile-alt"></i> +84012345678910</span>
                </li>
                <li className="nav-item">
                  <span className=""><i className="far fa-envelope"></i> appleStore5@gmail.com</span>
                </li>
               
                {/*
                 */}
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className='nav-link text-white' href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="nav-item"><a className='nav-link text-white' href="#"><i className="fab fa-instagram"></i></a></li>
                <li className="nav-item"><a className='nav-link text-white' href="#"><i className="fab fa-pinterest-p"></i></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <header className="header bg-white">
        <div className="container px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
            <a className="navbar-brand" href={'/'}>
              <span className="fw-bold text-uppercase text-dark">
                LaziStore
              </span>
            </a>
            <button
              className="navbar-toggler navbar-toggler-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
              {menuList}
                <li className="nav-item dropdown">
                  <div>
                    <a
                    className="nav-link "
                    id="pagesDropdownSearch"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="false"
                    aria-expanded="true"
                  >
                  <i className="fas fa-search"></i>
                    {' Tìm kiếm'}
                  </a>
                    <div
                      className="dropdown-menu mt-3 shadow-sm"
                      aria-labelledby="pagesDropdownSearch"
                    >
                      <div
                        className="dropdown-item border-0"
                        style={{width:450}}
                      >
                      {/**
                      */}
                        <FormSearch />
                      </div>
                    </div>
                  </div>
                </li>
                {/*
                 */}
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      param['*'] === "/gio-hang" ? "active" : " "
                    }`}
                    to="/gio-hang"
                  >
                    {" "}
                    <i className="fas fa-dolly-flatbed me-1 text-gray"></i>
                    {!hasLogin ? <span>Giỏ hàng <small className="text-gray fw-normal">(0)</small></span> :<small className="text-gray fw-normal">(+99)</small>}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#!">
                    {" "}
                    <i className="far fa-heart me-1"></i>
                    <small className="text-gray fw-normal"> (0)</small>
                  </Link>
                </li>
                {hasLogin ? (
                  <li className="nav-item dropdown me-3">
                    <a
                      className="nav-link dropdown-toggle"
                      id="pagesDropdown"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user me-1 text-gray fw-normal"></i>
                      {userName}
                    </a>
                    <div
                      className="dropdown-menu mt-3 shadow-sm w-25"
                      aria-labelledby="pagesDropdown"
                    >
                      <a
                        className="dropdown-item border-0 transition-link"
                        href="index.html"
                      >
                        Thông tin khách hàng
                      </a>
                      <a
                        className="dropdown-item border-0 transition-link"
                        href="detail.html"
                      >
                        Lịch sử đặt hàng
                      </a>
                      <a
                        className="dropdown-item border-0 transition-link"
                        href="cart.html"
                      >
                        Quá trình giao hàng
                      </a>
                      <a
                        className="dropdown-item border-0 transition-link"
                        href="cart.html"
                      >
                        Mã giảm giá
                      </a>
                      <a
                        className="dropdown-item border-0 transition-link"
                        href="/lazi-store/"
                        onClick={handleLogout}
                      >
                        Đăng xuất
                      </a>
                    </div>
                  </li>
                ):(menuLogin)}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
}
export default Header;
