import "../styles/globals.css";
import Layout from "./components/layout";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview, FB_PIXEL_ID } from "../public/lib/fpixel";

const handleRouteChange = () => {
	pageview();
};

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		// the below will only fire on route changes (not initial load - that is handled in the script below)
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script id="google-analytics" strategy="lazyOnload">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
			</Script>
			<Script id="facebook-pixel">
				{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${FB_PIXEL_ID});
        fbq('track', 'PageView');
      `}
			</Script>
				<Layout>
					<Component {...pageProps} />
				</Layout>
		</>
	);
}

export default MyApp;