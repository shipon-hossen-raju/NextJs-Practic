"use client";

import Link from "next/link";
import { Suspense } from "react";

const getUsers = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	return data;
};

const page = async () => {
	const users = await getUsers();

	console.log("users data -> ", users);

	return (
		<div>
			<h1>user pages</h1>

			<Suspense
				fallback={
					<h1 className="text-2xl text-green-500"> Loading... Suspense </h1>
				}
			/>

			<ul>
				{users &&
					users?.map((user) => (
						<li key={user?.id}>
							<span> {user?.id} </span> -
							<Link href={`/users/${user?.id}`}> {user?.username} </Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default page;
