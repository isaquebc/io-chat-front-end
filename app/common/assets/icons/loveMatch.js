import React from "react";

export default (

	<svg viewBox="0 0 27 26">
		<defs>
			<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
				<feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
				<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
				<feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
				<feMerge>
					<feMergeNode in="shadowMatrixOuter1"></feMergeNode>
					<feMergeNode in="SourceGraphic"></feMergeNode>
				</feMerge>
			</filter>
		</defs>
		<g id="Telas" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
			<g id="Oportunidades" transform="translate(-237.000000, -1345.000000)" stroke="#EB5858" strokeWidth="2" fill="#EB5858">
				<g id="Group-44" transform="translate(111.000000, 1137.000000)">
					<g id="Group-24" transform="translate(20.000000, 189.000000)">
						<g id="Group-44-Copy" transform="translate(80.000000, 0.000000)">
							<path d="M46.7192646,30.5185296 L39.5515872,37.5141511 L32.3839099,30.5185296 C30.4046105,28.5867421 30.4046105,25.4546957 32.3839099,23.5229082 C34.3632094,21.5911206 37.5722878,21.5911206 39.5515872,23.5229082 C41.5308867,21.5911206 44.7399651,21.5911206 46.7192646,23.5229082 C48.698564,25.4546957 48.698564,28.5867421 46.7192646,30.5185296 Z" id="Combined-Shape"></path>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>

);