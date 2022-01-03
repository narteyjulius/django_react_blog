import React from 'react';

const SkeletonDetail = () => {
	return (
		<div>
			{/* card gedf-card */}
			<div class="body  ph-item">
				<div className="img-post">
					<div class=" d-block img-fluid ph-col-2">
						<div class="ph-avatar" />
					</div>
				</div>

				<div className="mr-2" />
				<div className="ml-2">
					<div class="ph-col-4" />
				</div>

				<div class="ph-col-12">
					<div class="ph-row">
						<div class="ph-col-4" />
						<div class="ph-col-8 empty" />
						<div class="ph-col-12" />
					</div>
					<div class="ph-row">
						<div class="ph-col-4" />
						<div class="ph-col-8 empty" />
						<div class="ph-col-12" />
					</div>
				</div>

				<div>
					<div class="ph-row">
						<div class="ph-col-12" />
						<div class="ph-col-2" />
						<div class="ph-col-10 empty" />
						<div class="ph-col-8 big" />
						<div class="ph-col-4 big empty" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkeletonDetail;
