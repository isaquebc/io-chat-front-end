import React from "react";

export default (
	<svg viewBox="0 0 32 31">
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
		<g id="Telas" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="Oportunidades" transform="translate(-314.000000, -1739.000000)" strokeWidth="2" stroke="#FFFFFF">
				<g id="Group-44" transform="translate(111.000000, 1534.000000)">
					<g id="Group-24" transform="translate(20.000000, 189.000000)">
						<g id="Group-45-Copy" transform="translate(159.000000, 0.000000)">
							<g id="Group-3">
								<g id="ic_done" transform="translate(25.381679, 15.451847)">
									<g id="done" transform="translate(3.593602, 3.507340)">
										<ellipse id="Oval-7" cx="10.7808074" cy="10.5220205" rx="10.7808074" ry="10.5220205"></ellipse>
										<g id="tick" transform="translate(7.187205, 8.183794)" strokeLinecap="round" strokeLinejoin="round">
											<path d="M0,3.50734015 L2.39573497,5.84556692" id="Line"></path>
											<path d="M2.39573497,5.84556692 L8.3850724,0" id="Line"></path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
);