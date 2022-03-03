import Header from "./header";
import Footer from "./footer";
const Layout = (props) => {
	return (
		<>
			<div className="h-screen flex">
				<div className="text-slate-700 flex flex-col gap-6 m-auto">
					<div className="max-w-4xl text-center">
						<Header />
						{props.children}
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
