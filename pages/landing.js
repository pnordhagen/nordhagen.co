import Image from "next/image";
import Link from "next/link";
import landingPagePicture from "../public/images/pexels-dominika-roseclay-1166868.jpg";

const landing = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold">
				Explore how we can help you maximize and reach your goals.
			</h1>
			<div className="text-md flex flex-row mb-6 w-full h-3/4 mt-4">
				<Image
					src={landingPagePicture}
					alt="landingPagePicture"
					width="500px"
					height="500px"
				/>
				<div className="flex flex-col justify-center leading-8">
					<ul className="mt-3 font-bold text-left ml-5">
						<li>- You know how to change someones life into what they want.</li>
						<li>- We know how to reach them for you.</li>
						<li>- Lets build an amazing team together.</li>
					</ul>
					<Link href="/signup">
						<a>
							<button className="bg-blue-600 text-white rounded w-32 mt-10 mb-2 h-10">
								Next
							</button>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default landing;
