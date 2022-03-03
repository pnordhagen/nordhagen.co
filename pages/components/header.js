import Link from "next/link";

const Header = () => {
	return (
		<>
			<Link href="/">
				<div className="text-7xl hover:cursor-pointer text-center mb-28 h-24">
					<a>Nordhagen Consulting</a>
				</div>
			</Link>
		</>
	);
};

export default Header;
