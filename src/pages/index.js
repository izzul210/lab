/** @format */

import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home({ res }) {
	return (
		<>
			<Head>
				<title>Izzul's Lab</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<div>Welcome! {res}</div>
			</main>
		</>
	);
}

export async function getServerSideProps() {
	const res = 'testt!';

	return {
		props: {
			res,
		},
	};
}
