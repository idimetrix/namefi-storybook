import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgLandingFaster = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 101" ref={ref} {...props}>
		<mask
			id="landing-faster_svg__a"
			width={100}
			height={101}
			x={0}
			y={0}
			maskUnits="userSpaceOnUse"
			style={{
				maskType: 'alpha',
			}}>
			<circle cx={50} cy={50.5} r={50} fill="#796B6B" />
		</mask>
		<g mask="url(#landing-faster_svg__a)">
			<mask
				id="landing-faster_svg__b"
				width={84}
				height={84}
				x={0}
				y={10}
				fill="#000"
				maskUnits="userSpaceOnUse">
				<path fill="#fff" d="M0 10h84v84H0z" />
				<path
					fillRule="evenodd"
					d="M72.328 11.842v9.289a.836.836 0 0 1-.83.841H52.34a.836.836 0 0 1-.83-.841v-9.29c0-.464.372-.841.83-.841h19.158c.458 0 .83.377.83.842M55.213 24.329h13.413v2.27a.85.85 0 0 1-.244.596.83.83 0 0 1-.587.246H56.043a.82.82 0 0 1-.586-.246.85.85 0 0 1-.244-.595zm9.998 5.47v1.662c0 .152-.04.3-.117.43l-2.462 4.19a.827.827 0 0 1-1.426 0l-2.461-4.19a.85.85 0 0 1-.118-.43v-1.663zm-4.454 9.18c0-.651.521-1.179 1.162-1.179a1.17 1.17 0 0 1 1.162 1.178v6.152a5.14 5.14 0 0 0 1.473 3.608 5 5 0 0 0 3.557 1.494h10.245c1.231 0 2.413.496 3.284 1.38A4.74 4.74 0 0 1 83 54.944v.014c0 2.571-2.05 4.66-4.584 4.67l-32.97.148c-1.263.005-2.284 1.045-2.284 2.327 0 1.3 1.04 2.354 2.32 2.354h32.806c1.25 0 2.449.505 3.333 1.4A4.82 4.82 0 0 1 83 69.238a4.82 4.82 0 0 1-1.38 3.38 4.68 4.68 0 0 1-3.332 1.4H45.462c-1.27 0-2.3 1.044-2.3 2.333 0 1.287 1.03 2.333 2.3 2.333h10.563a7 7 0 0 1 4.99 2.097 7.2 7.2 0 0 1 2.066 5.061c0 1.898-.743 3.72-2.066 5.063A7 7 0 0 1 56.025 93H2.16A1.17 1.17 0 0 1 1 91.821c0-.65.52-1.179 1.161-1.179h53.864a4.7 4.7 0 0 0 3.346-1.406 4.84 4.84 0 0 0 1.386-3.394 4.84 4.84 0 0 0-1.386-3.395 4.7 4.7 0 0 0-3.346-1.407H45.462c-2.553 0-4.624-2.099-4.624-4.69 0-2.59 2.07-4.69 4.624-4.69h32.826a2.37 2.37 0 0 0 1.69-.71c.447-.455.699-1.07.699-1.713 0-.642-.252-1.259-.7-1.712a2.37 2.37 0 0 0-1.689-.71H45.483c-2.565 0-4.645-2.11-4.645-4.712 0-2.579 2.055-4.673 4.597-4.684l32.97-.148c1.256-.005 2.272-1.04 2.272-2.313v-.014c0-.625-.245-1.223-.68-1.666a2.3 2.3 0 0 0-1.641-.688H68.11a7.3 7.3 0 0 1-5.2-2.186 7.5 7.5 0 0 1-2.154-5.274zM2.16 20.773A1.17 1.17 0 0 1 1 19.596c0-.65.52-1.178 1.161-1.178h4.406a1.17 1.17 0 0 1 1.162 1.178c0 .65-.52 1.178-1.162 1.178zm8.597 0a1.17 1.17 0 0 1-1.162-1.178c0-.65.52-1.178 1.162-1.178h4.405c.641 0 1.162.527 1.162 1.178a1.17 1.17 0 0 1-1.162 1.178zM2.16 55.108A1.17 1.17 0 0 1 1 53.93c0-.652.52-1.18 1.161-1.18h4.406a1.17 1.17 0 0 1 1.162 1.18c0 .65-.52 1.178-1.162 1.178zm8.597 0a1.17 1.17 0 0 1-1.162-1.178c0-.652.52-1.18 1.162-1.18h4.405c.641 0 1.162.528 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm-5.276-8.584a1.17 1.17 0 0 1-1.163-1.178c0-.651.522-1.179 1.163-1.179h4.405a1.17 1.17 0 0 1 1.162 1.18 1.17 1.17 0 0 1-1.162 1.177zm0-17.166a1.17 1.17 0 0 1-1.163-1.178c0-.652.522-1.18 1.163-1.18h4.405a1.17 1.17 0 0 1 1.162 1.18 1.17 1.17 0 0 1-1.162 1.178zm-1.66 8.583a1.17 1.17 0 0 1-1.163-1.178c0-.65.521-1.179 1.163-1.179h4.405c.642 0 1.162.529 1.162 1.179s-.52 1.178-1.162 1.178zm28.27 18.227c-10.538 0-19.132-8.716-19.132-19.407 0-10.687 8.594-19.404 19.133-19.404 10.537 0 19.13 8.717 19.13 19.404 0 10.691-8.593 19.407-19.13 19.407m0-2.93c8.948 0 16.243-7.402 16.243-16.477S41.04 20.285 32.093 20.285s-16.246 7.402-16.246 16.476c0 9.075 7.3 16.477 16.246 16.477m0-2.358c-7.665 0-13.92-6.342-13.92-14.119 0-7.776 6.255-14.118 13.92-14.118 7.667 0 13.92 6.342 13.92 14.118s-6.253 14.12-13.92 14.12m8.49-21.065.533-.539c.455-.459.456-1.206.004-1.666a1.15 1.15 0 0 0-1.644-.004l-.532.539a1.19 1.19 0 0 0-.004 1.666 1.15 1.15 0 0 0 1.643.004m-9.651 17.951v.763c0 .65.52 1.179 1.162 1.179s1.162-.529 1.162-1.18v-.762c0-.65-.521-1.179-1.162-1.179s-1.162.529-1.162 1.179m8.012-2.388.532.539c.455.46 1.191.457 1.644-.004a1.19 1.19 0 0 0-.004-1.667l-.533-.538a1.15 1.15 0 0 0-1.643.003 1.19 1.19 0 0 0 .004 1.667M23.6 43.71l-.532.538a1.19 1.19 0 0 0 0 1.667c.454.46 1.19.46 1.644 0l.531-.539a1.19 1.19 0 0 0 0-1.666 1.15 1.15 0 0 0-1.643 0m19.341-5.77h.75a1.17 1.17 0 0 0 1.162-1.179c0-.65-.52-1.178-1.162-1.178h-.75a1.17 1.17 0 0 0-1.161 1.178c0 .651.52 1.179 1.161 1.179m-12.01-2.688a1.92 1.92 0 0 0-.727 1.51c0 1.056.847 1.916 1.889 1.916.25 0 .49-.05.708-.14l3.948 2.313a1.154 1.154 0 0 0 1.587-.431c.321-.564.13-1.285-.425-1.61l-3.95-2.315a1.92 1.92 0 0 0-.706-1.24v-6.43a1.17 1.17 0 0 0-1.162-1.178 1.17 1.17 0 0 0-1.162 1.178zm-9.689.331h-.75a1.17 1.17 0 0 0-1.162 1.178c0 .651.52 1.179 1.162 1.179h.75a1.17 1.17 0 0 0 1.162-1.179 1.17 1.17 0 0 0-1.162-1.178m12.013-9.826v-.76c0-.651-.521-1.18-1.162-1.18s-1.162.529-1.162 1.18v.76c0 .65.52 1.18 1.162 1.18s1.162-.53 1.162-1.18m-8.012 2.389-.53-.538a1.15 1.15 0 0 0-1.645 0 1.19 1.19 0 0 0 0 1.666l.532.54c.453.46 1.19.46 1.643 0a1.193 1.193 0 0 0 0-1.668"
					clipRule="evenodd"
				/>
			</mask>
			<path
				fill="#313131"
				fillRule="evenodd"
				d="M72.328 11.842v9.289a.836.836 0 0 1-.83.841H52.34a.836.836 0 0 1-.83-.841v-9.29c0-.464.372-.841.83-.841h19.158c.458 0 .83.377.83.842M55.213 24.329h13.413v2.27a.85.85 0 0 1-.244.596.83.83 0 0 1-.587.246H56.043a.82.82 0 0 1-.586-.246.85.85 0 0 1-.244-.595zm9.998 5.47v1.662c0 .152-.04.3-.117.43l-2.462 4.19a.827.827 0 0 1-1.426 0l-2.461-4.19a.85.85 0 0 1-.118-.43v-1.663zm-4.454 9.18c0-.651.521-1.179 1.162-1.179a1.17 1.17 0 0 1 1.162 1.178v6.152a5.14 5.14 0 0 0 1.473 3.608 5 5 0 0 0 3.557 1.494h10.245c1.231 0 2.413.496 3.284 1.38A4.74 4.74 0 0 1 83 54.944v.014c0 2.571-2.05 4.66-4.584 4.67l-32.97.148c-1.263.005-2.284 1.045-2.284 2.327 0 1.3 1.04 2.354 2.32 2.354h32.806c1.25 0 2.449.505 3.333 1.4A4.82 4.82 0 0 1 83 69.238a4.82 4.82 0 0 1-1.38 3.38 4.68 4.68 0 0 1-3.332 1.4H45.462c-1.27 0-2.3 1.044-2.3 2.333 0 1.287 1.03 2.333 2.3 2.333h10.563a7 7 0 0 1 4.99 2.097 7.2 7.2 0 0 1 2.066 5.061c0 1.898-.743 3.72-2.066 5.063A7 7 0 0 1 56.025 93H2.16A1.17 1.17 0 0 1 1 91.821c0-.65.52-1.179 1.161-1.179h53.864a4.7 4.7 0 0 0 3.346-1.406 4.84 4.84 0 0 0 1.386-3.394 4.84 4.84 0 0 0-1.386-3.395 4.7 4.7 0 0 0-3.346-1.407H45.462c-2.553 0-4.624-2.099-4.624-4.69 0-2.59 2.07-4.69 4.624-4.69h32.826a2.37 2.37 0 0 0 1.69-.71c.447-.455.699-1.07.699-1.713 0-.642-.252-1.259-.7-1.712a2.37 2.37 0 0 0-1.689-.71H45.483c-2.565 0-4.645-2.11-4.645-4.712 0-2.579 2.055-4.673 4.597-4.684l32.97-.148c1.256-.005 2.272-1.04 2.272-2.313v-.014c0-.625-.245-1.223-.68-1.666a2.3 2.3 0 0 0-1.641-.688H68.11a7.3 7.3 0 0 1-5.2-2.186 7.5 7.5 0 0 1-2.154-5.274zM2.16 20.773A1.17 1.17 0 0 1 1 19.596c0-.65.52-1.178 1.161-1.178h4.406a1.17 1.17 0 0 1 1.162 1.178c0 .65-.52 1.178-1.162 1.178zm8.597 0a1.17 1.17 0 0 1-1.162-1.178c0-.65.52-1.178 1.162-1.178h4.405c.641 0 1.162.527 1.162 1.178a1.17 1.17 0 0 1-1.162 1.178zM2.16 55.108A1.17 1.17 0 0 1 1 53.93c0-.652.52-1.18 1.161-1.18h4.406a1.17 1.17 0 0 1 1.162 1.18c0 .65-.52 1.178-1.162 1.178zm8.597 0a1.17 1.17 0 0 1-1.162-1.178c0-.652.52-1.18 1.162-1.18h4.405c.641 0 1.162.528 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm-5.276-8.584a1.17 1.17 0 0 1-1.163-1.178c0-.651.522-1.179 1.163-1.179h4.405a1.17 1.17 0 0 1 1.162 1.18 1.17 1.17 0 0 1-1.162 1.177zm0-17.166a1.17 1.17 0 0 1-1.163-1.178c0-.652.522-1.18 1.163-1.18h4.405a1.17 1.17 0 0 1 1.162 1.18 1.17 1.17 0 0 1-1.162 1.178zm-1.66 8.583a1.17 1.17 0 0 1-1.163-1.178c0-.65.521-1.179 1.163-1.179h4.405c.642 0 1.162.529 1.162 1.179s-.52 1.178-1.162 1.178zm28.27 18.227c-10.538 0-19.132-8.716-19.132-19.407 0-10.687 8.594-19.404 19.133-19.404 10.537 0 19.13 8.717 19.13 19.404 0 10.691-8.593 19.407-19.13 19.407m0-2.93c8.948 0 16.243-7.402 16.243-16.477S41.04 20.285 32.093 20.285s-16.246 7.402-16.246 16.476c0 9.075 7.3 16.477 16.246 16.477m0-2.358c-7.665 0-13.92-6.342-13.92-14.119 0-7.776 6.255-14.118 13.92-14.118 7.667 0 13.92 6.342 13.92 14.118s-6.253 14.12-13.92 14.12m8.49-21.065.533-.539c.455-.459.456-1.206.004-1.666a1.15 1.15 0 0 0-1.644-.004l-.532.539a1.19 1.19 0 0 0-.004 1.666 1.15 1.15 0 0 0 1.643.004m-9.651 17.951v.763c0 .65.52 1.179 1.162 1.179s1.162-.529 1.162-1.18v-.762c0-.65-.521-1.179-1.162-1.179s-1.162.529-1.162 1.179m8.012-2.388.532.539c.455.46 1.191.457 1.644-.004a1.19 1.19 0 0 0-.004-1.667l-.533-.538a1.15 1.15 0 0 0-1.643.003 1.19 1.19 0 0 0 .004 1.667M23.6 43.71l-.532.538a1.19 1.19 0 0 0 0 1.667c.454.46 1.19.46 1.644 0l.531-.539a1.19 1.19 0 0 0 0-1.666 1.15 1.15 0 0 0-1.643 0m19.341-5.77h.75a1.17 1.17 0 0 0 1.162-1.179c0-.65-.52-1.178-1.162-1.178h-.75a1.17 1.17 0 0 0-1.161 1.178c0 .651.52 1.179 1.161 1.179m-12.01-2.688a1.92 1.92 0 0 0-.727 1.51c0 1.056.847 1.916 1.889 1.916.25 0 .49-.05.708-.14l3.948 2.313a1.154 1.154 0 0 0 1.587-.431c.321-.564.13-1.285-.425-1.61l-3.95-2.315a1.92 1.92 0 0 0-.706-1.24v-6.43a1.17 1.17 0 0 0-1.162-1.178 1.17 1.17 0 0 0-1.162 1.178zm-9.689.331h-.75a1.17 1.17 0 0 0-1.162 1.178c0 .651.52 1.179 1.162 1.179h.75a1.17 1.17 0 0 0 1.162-1.179 1.17 1.17 0 0 0-1.162-1.178m12.013-9.826v-.76c0-.651-.521-1.18-1.162-1.18s-1.162.529-1.162 1.18v.76c0 .65.52 1.18 1.162 1.18s1.162-.53 1.162-1.18m-8.012 2.389-.53-.538a1.15 1.15 0 0 0-1.645 0 1.19 1.19 0 0 0 0 1.666l.532.54c.453.46 1.19.46 1.643 0a1.193 1.193 0 0 0 0-1.668"
				clipRule="evenodd"
			/>
			<path
				stroke="#313131"
				d="M72.328 11.842v9.289a.836.836 0 0 1-.83.841H52.34a.836.836 0 0 1-.83-.841v-9.29c0-.464.372-.841.83-.841h19.158c.458 0 .83.377.83.842ZM55.213 24.329h13.413v2.27a.85.85 0 0 1-.244.596.83.83 0 0 1-.587.246H56.043a.82.82 0 0 1-.586-.246.85.85 0 0 1-.244-.595zm9.998 5.47v1.662c0 .152-.04.3-.117.43l-2.462 4.19a.827.827 0 0 1-1.426 0l-2.461-4.19a.85.85 0 0 1-.118-.43v-1.663zm-4.454 9.18c0-.651.521-1.179 1.162-1.179a1.17 1.17 0 0 1 1.162 1.178v6.152a5.14 5.14 0 0 0 1.473 3.608 5 5 0 0 0 3.557 1.494h10.245c1.231 0 2.413.496 3.284 1.38A4.74 4.74 0 0 1 83 54.944v.014c0 2.571-2.05 4.66-4.584 4.67l-32.97.148c-1.263.005-2.284 1.045-2.284 2.327 0 1.3 1.04 2.354 2.32 2.354h32.806c1.25 0 2.449.505 3.333 1.4A4.82 4.82 0 0 1 83 69.238a4.82 4.82 0 0 1-1.38 3.38 4.68 4.68 0 0 1-3.332 1.4H45.462c-1.27 0-2.3 1.044-2.3 2.333 0 1.287 1.03 2.333 2.3 2.333h10.563a7 7 0 0 1 4.99 2.097 7.2 7.2 0 0 1 2.066 5.061c0 1.898-.743 3.72-2.066 5.063A7 7 0 0 1 56.025 93H2.16A1.17 1.17 0 0 1 1 91.821c0-.65.52-1.179 1.161-1.179h53.864a4.7 4.7 0 0 0 3.346-1.406 4.84 4.84 0 0 0 1.386-3.394 4.84 4.84 0 0 0-1.386-3.395 4.7 4.7 0 0 0-3.346-1.407H45.462c-2.553 0-4.624-2.099-4.624-4.69 0-2.59 2.07-4.69 4.624-4.69h32.826a2.37 2.37 0 0 0 1.69-.71c.447-.455.699-1.07.699-1.713 0-.642-.252-1.259-.7-1.712a2.37 2.37 0 0 0-1.689-.71H45.483c-2.565 0-4.645-2.11-4.645-4.712 0-2.579 2.055-4.673 4.597-4.684l32.97-.148c1.256-.005 2.272-1.04 2.272-2.313v-.014c0-.625-.245-1.223-.68-1.666a2.3 2.3 0 0 0-1.641-.688H68.11a7.3 7.3 0 0 1-5.2-2.186 7.5 7.5 0 0 1-2.154-5.274zM2.16 20.773A1.17 1.17 0 0 1 1 19.596c0-.65.52-1.178 1.161-1.178h4.406a1.17 1.17 0 0 1 1.162 1.178c0 .65-.52 1.178-1.162 1.178zm8.597 0a1.17 1.17 0 0 1-1.162-1.178c0-.65.52-1.178 1.162-1.178h4.405c.641 0 1.162.527 1.162 1.178a1.17 1.17 0 0 1-1.162 1.178zM2.16 55.108A1.17 1.17 0 0 1 1 53.93c0-.652.52-1.18 1.161-1.18h4.406a1.17 1.17 0 0 1 1.162 1.18c0 .65-.52 1.178-1.162 1.178zm8.597 0a1.17 1.17 0 0 1-1.162-1.178c0-.652.52-1.18 1.162-1.18h4.405c.641 0 1.162.528 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm-5.276-8.584a1.17 1.17 0 0 1-1.163-1.178c0-.651.522-1.179 1.163-1.179h4.405a1.17 1.17 0 0 1 1.162 1.18 1.17 1.17 0 0 1-1.162 1.177zm0-17.166a1.17 1.17 0 0 1-1.163-1.178c0-.652.522-1.18 1.163-1.18h4.405a1.17 1.17 0 0 1 1.162 1.18 1.17 1.17 0 0 1-1.162 1.178zm-1.66 8.583a1.17 1.17 0 0 1-1.163-1.178c0-.65.521-1.179 1.163-1.179h4.405c.642 0 1.162.529 1.162 1.179s-.52 1.178-1.162 1.178zm28.27 18.227c-10.538 0-19.132-8.716-19.132-19.407 0-10.687 8.594-19.404 19.133-19.404 10.537 0 19.13 8.717 19.13 19.404 0 10.691-8.593 19.407-19.13 19.407Zm0-2.93c8.948 0 16.243-7.402 16.243-16.477S41.04 20.285 32.093 20.285s-16.246 7.402-16.246 16.476c0 9.075 7.3 16.477 16.246 16.477Zm0-2.358c-7.665 0-13.92-6.342-13.92-14.119 0-7.776 6.255-14.118 13.92-14.118 7.667 0 13.92 6.342 13.92 14.118s-6.253 14.12-13.92 14.12Zm8.49-21.065.533-.539c.455-.459.456-1.206.004-1.666a1.15 1.15 0 0 0-1.644-.004l-.532.539a1.19 1.19 0 0 0-.004 1.666 1.15 1.15 0 0 0 1.643.004Zm-9.651 17.951v.763c0 .65.52 1.179 1.162 1.179s1.162-.529 1.162-1.18v-.762c0-.65-.521-1.179-1.162-1.179s-1.162.529-1.162 1.179Zm8.012-2.388.532.539c.455.46 1.191.457 1.644-.004a1.19 1.19 0 0 0-.004-1.667l-.533-.538a1.15 1.15 0 0 0-1.643.003 1.19 1.19 0 0 0 .004 1.667ZM23.6 43.71l-.532.538a1.19 1.19 0 0 0 0 1.667c.454.46 1.19.46 1.644 0l.531-.539a1.19 1.19 0 0 0 0-1.666 1.15 1.15 0 0 0-1.643 0Zm19.341-5.77h.75a1.17 1.17 0 0 0 1.162-1.179c0-.65-.52-1.178-1.162-1.178h-.75a1.17 1.17 0 0 0-1.161 1.178c0 .651.52 1.179 1.161 1.179Zm-12.01-2.688a1.92 1.92 0 0 0-.727 1.51c0 1.056.847 1.916 1.889 1.916.25 0 .49-.05.708-.14l3.948 2.313a1.154 1.154 0 0 0 1.587-.431c.321-.564.13-1.285-.425-1.61l-3.95-2.315a1.92 1.92 0 0 0-.706-1.24v-6.43a1.17 1.17 0 0 0-1.162-1.178 1.17 1.17 0 0 0-1.162 1.178zm-9.689.331h-.75a1.17 1.17 0 0 0-1.162 1.178c0 .651.52 1.179 1.162 1.179h.75a1.17 1.17 0 0 0 1.162-1.179 1.17 1.17 0 0 0-1.162-1.178Zm12.013-9.826v-.76c0-.651-.521-1.18-1.162-1.18s-1.162.529-1.162 1.18v.76c0 .65.52 1.18 1.162 1.18s1.162-.53 1.162-1.18Zm-8.012 2.389-.53-.538a1.15 1.15 0 0 0-1.645 0 1.19 1.19 0 0 0 0 1.666l.532.54c.453.46 1.19.46 1.643 0a1.193 1.193 0 0 0 0-1.668Z"
				clipRule="evenodd"
				mask="url(#landing-faster_svg__b)"
			/>
		</g>
	</svg>
);
const ForwardRef = forwardRef(SvgLandingFaster);
const Memo = memo(ForwardRef);
export default Memo;