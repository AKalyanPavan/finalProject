import Header from './header.js'

function HomePage({changePage}) {
	
	return(
		<>
			<Header changePage={changePage}/>
			<div className="w-[80%] mx-[auto] h-max mt-[20px]">
				<div className="bg-[#FAE1B6] rounded-[10px] p-[20px] text-left text-[20px] text-[#1C3752] font-medium">
					Introducing TaskFlow, your all-in-one task management companion designed to streamline your daily productivity. TaskFlow revolutionizes the way you manage tasks, offering a seamless and intuitive platform to organize, prioritize, and accomplish your to-dos effortlessly. Whether you're a professional seeking enhanced work productivity or an individual looking to stay on top of personal tasks, TaskFlow is the solution you've been searching for.
					<br />
					<br />
					With TaskFlow, you can create, track, and manage tasks with unparalleled ease. The app boasts a user-friendly interface and powerful features, allowing you to categorize tasks, set deadlines, and assign priorities in just a few clicks. Experience real-time collaboration by sharing tasks with colleagues, friends, or family, ensuring everyone stays on the same page and tasks get completed efficiently.
					<br />
					<br />
					TaskFlow isn't just about task management; it's about optimizing your workflow. Enjoy the flexibility of accessing your tasks from anywhere, anytime, whether you're on your desktop, mobile phone, or tablet. Receive smart notifications and reminders to keep you informed about upcoming deadlines and progress updates. Join the thousands who have simplified their lives with TaskFlow, the ultimate task management tool that brings organization, efficiency, and productivity to your fingertips.
				</div>
				<div className="mt-[20px] min-[500px]:flex justify-center">
					<div className="bg-[#1C3752] p-[20px] rounded-[50%] aspect-square items-center justify-center flex text-[#FAE1B6]">
						<div>
							<div className="text-[50px]">10,000+</div>
							<div className="text-[30px]">Users</div>
						</div>
					</div>
					<div className="bg-[#1C3752] p-[20px] rounded-[50%] aspect-square items-center justify-center flex text-[#FAE1B6] min-[500px]:ml-[20px] max-[500px]:mt-[20px]">
						<div>
							<div className="text-[50px]">300</div>
							<div className="text-[30px]">Tasks/Month</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage