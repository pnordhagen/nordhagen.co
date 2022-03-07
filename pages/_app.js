import "../styles/globals.css";
import Layout from "./components/layout";
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";



function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-554TS5B" });
	}, []);

	

	return (
		<>
			<Head>
				<title>Nordhagen Consulting</title>
			</Head>

			<Script id="google-analytics" strategy="lazyOnload">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-554TS5B', {
              page_path: window.location.pathname,
            });
                `}
			</Script>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=GTM-554TS5B`}
			/>
			
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
