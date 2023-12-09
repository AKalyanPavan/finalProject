import Button from './genericComponents/button.js';
import Logo from './../icons/logo.js';
function Header({changePage}) {

  function loginPage(data) {
    changePage(data)
  }

  return (
    <div className="w-[100%] bg-[#1C3752] sticky top-[0px] h-[100px] flex justify-center">
      <div className="w-[80%] flex items-center justify-between max-[700px]:w-[100%]">
        <div className="w-[100px] h-[100px] flex items-center">
          <div className="w-[100px] h-[100px]">
            <Logo color="#2BB77B" height="100px" width="100px"/>
          </div>
          <span className="text-[#FFFFFF] text-[40px] ml-[-10px] font-extrabold max-[700px]:hidden">TaskFlow</span>
        </div>
        <div className="flex items-center h-[100%] mr-[20px]">
          <div onClick={() => loginPage("login")}>
            <Button name="Login" customStyle="px-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;