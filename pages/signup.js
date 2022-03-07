import { supabase } from "./components/supabase";
import { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

const signup = () => {
	const signedEmail = useRef();
	const signedName = useRef();
    const router = useRouter();

	function setFormValueHandler(e) {
		e.preventDefault();
		const emailName = signedEmail.current.value;
		const personName = signedName.current.value;
		signupEmail(emailName, personName);
	}

	async function signupEmail(email, name) {
		const { data, error } = await supabase
			.from("signed_emails")
			.insert([{ email: email, name: name }]);
		changePage();
	}

	function changePage() {
		router.push('/video_page');
	}

	return (
		<div className="p-8 justify-center items-center flex">
			<form className="flex flex-col" onSubmit={setFormValueHandler}>
				<input
					ref={signedName}
					className="bg-gray-200 shadow-inner rounded p-2 flex-1"
					id="name"
					type="name"
					aria-label="name"
					placeholder="Enter your name"
				/>
				<input
					ref={signedEmail}
					className="bg-gray-200 shadow-inner rounded p-2 flex-1 mt-3"
					id="email"
					type="email"
					aria-label="email address"
					placeholder="Enter your email address"
				/>
				<button
					className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded mt-3"
					type="submit"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default signup;
