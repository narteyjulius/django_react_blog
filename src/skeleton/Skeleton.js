import React from 'react';

const Skeleton = () => {
	return (
		<div>
			<div class="ph-item">
				<div class="ph-col-12">
					<div class="ph-picture" />
					<div class="ph-row">
						<div class="ph-col-4" />
						<div class="ph-col-8 empty" />
						<div class="ph-col-12" />
					</div>
				</div>
				<div class="ph-col-2">
					<div class="ph-avatar" />
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

export default Skeleton;
