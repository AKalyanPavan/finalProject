import Logo from './../icons/logo.js';
import Button from './genericComponents/button.js';

function SignupPage({changePage}) {

	function homePage(data) {
		changePage(data)
	}
	
	return(
		<>
			<div className="w-[100%] bg-[#1C3752] sticky top-[0px] h-[100px] flex justify-center">
			</div>
			<div>
				<div className="w-max mx-[auto] text-center flex justify-center items-center top-[20px]">
					<div className="w-[100px] h-[100px] cursor-pointer" onClick={() => homePage("home")}>
						<Logo color="#2BB77B" height="100px" width="100px"/>
					</div>
					<div className="text-[40px] font-extrabold ml-[-10px]">TaskFlow</div>
				</div>
			</div>
			<div className="w-max mx-[auto] mt-[20px]">
				<div>
					<input className="border-2 border-solid border-[#1C3752] h-[50px] rounded-[10px] w-[300px] pl-[10px]" type="text" value="" placeholder="Username" />
				</div>
				<div className="mt-[20px]">
					<input className="border-2 border-solid border-[#1C3752] h-[50px] rounded-[10px] w-[300px] pl-[10px]" type="text" value="" placeholder="Password" />
				</div>
				<div>
					<Button name="Login" customStyle="mt-[20px] mx-[auto] px-[20px]" />
				</div>
			</div>
		</>
	)
}

export default SignupPage