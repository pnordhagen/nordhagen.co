import Image from "next/image";
import Link from "next/link";
import patrickPicture from "../../public/images/patrickNew.png";
import annaPicture from "../../public/images/annaProfile.png";
import linkedin from "../../public/images/icons/linkedin.png";

const HomePage = () => {
	return (
		<>
			
			<div className="flex gap-2 flex-wrap w-2/4 m-auto md:flex-nowrap md:w-fit mb-10">
				<div className="flex-grow mt-10 md:mt-0">
					<h1 className="text-xl font-bold">Patrick Nordhagen</h1>
					<Image
						src={patrickPicture}
						alt="PatrickProfile"
						width="200px"
						height="200px"
					/>

					<hr className="mt-4" />

					<div className="flex flex-col items-center space-y-3">
						<p className="mt-4">
							My name is Patrick Nordhagen and I am specialised in Facebook ads
							and have a deep understanding of advertising algorithms. I help my
							clients with local lead generation and online scaling.
						</p>
						<br />
						<p>
							Book a call with me if you are interested in more clients local or
							online.
						</p>

						<div>
							<Link href="/patrick">
								<a>
									<button className="bg-blue-600 text-white rounded w-32 mt-2 mb-2 h-10">
										Book a call
									</button>
								</a>
							</Link>

							<br />

							<Link href="https://www.linkedin.com/in/patricknordhagen/">
								<a>
									<Image
										src={linkedin}
										alt="linkedin-icon"
										width="25px"
										height="25px"
									/>
								</a>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex-grow mt-10 md:mt-0">
					<h1 className="text-xl font-bold">Anna Nordhagen</h1>
					<Image
						src={annaPicture}
						alt="AnnaProfile"
						width="200px"
						height="200px"
					/>

					<hr className="mt-4" />

					<p className="mt-4">
						My name is Anna Nordhagen and I am specialising in customer support,
						outreach, and copywriting for our ads. I love to connect with people
						and get results for our clients.
					</p>
					<br />
					<p>
						Book a call with me if you are interested in more clients and we
						will together break down your business and find your needs.
					</p>

					<Link href="/anna">
						<a>
							<button className="bg-blue-600 text-white rounded w-32 mt-2 mb-2 h-10">
								Book a call
							</button>
						</a>
					</Link>

					<br />

					<Link href="https://www.linkedin.com/in/anna-nordhagen-32b071a4/">
						<a>
							<Image
								src={linkedin}
								alt="linkedin-icon"
								width="25px"
								height="25px"
							/>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default HomePage;
