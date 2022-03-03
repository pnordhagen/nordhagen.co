import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/images/icons/facebook-logo.png";
import instagram from "../../public/images/icons/instagram.png";
import twitter from "../../public/images/icons/twitter.png";

const footer = () => {
	return (
		<>
			<div>
				<Link href="https://www.instagram.com/nordhagen.co/">
					<a className="mr-3">
						<Image
							src={instagram}
							alt="instagram-icon"
							width="25px"
							height="25px"
						/>
					</a>
				</Link>

				<Link href="https://www.facebook.com/nordhagen.co">
					<a className="mr-3">
						<Image
							src={facebook}
							alt="facebook-icon"
							width="25px"
							height="25px"
						/>
					</a>
				</Link>

				<Link href="https://twitter.com/nordhagenco">
					<a>
						<Image
							src={twitter}
							alt="twitter-icon"
							width="25px"
							height="25px"
						/>
					</a>
				</Link>

				<br />

				<Link href="/privacy">
					<a className="hover:underline">Privacy Policy</a>
				</Link>
				<Link href="/tos">
					<a className="hover:underline ml-4">Terms of service</a>
				</Link>
				<Link href="/disc">
					<a className="hover:underline ml-4">Disclaimer</a>
				</Link>
			</div>
			<p className="italic">© 2022 Nordhagen.co</p>
		</>
	);
};

export default footer;
