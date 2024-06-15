import Logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="shadow-sm fixed left-0 top-0 right-0 z-50 bg-white">
        <div className="w-[90%] mx-auto bg-red-6000">
            <img src={Logo} className="w-28 h-28 bg-yellow-6000" />
        </div>
    </header>
  );
}

export default Header;