import React from "react";
//passar para prop
export const Modal = () => {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				{/* <img
					className="rounded-t-lg"
					src="/docs/images/blog/image-1.jpg"
					alt=""
				/> */}
				<video
					autoPlay
					loop
					muted
					src="https://videos.pexels.com/video-files/8748744/8748744-uhd_2160_4096_25fps.mp4"></video>
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Bebidas
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Venha conhecer o melhor das bebidas e drinks japoneses
				</p>
				<a
					href="#"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-950 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-400-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
					Read more
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};
