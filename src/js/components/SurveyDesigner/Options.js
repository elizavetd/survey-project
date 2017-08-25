import React from "react"

import { PageNavButtons } from './OptionsButtons'
import { StepButtons } from './OptionsButtons'
import { OptionButtons } from './OptionsButtons'

const Options = ({ position, url }) => (
	<aside>
		{ (position === 'left') && 
			<PageNavButtons type="survey-setup survey-setup_left" url={url} /> 
		}
		{ (position === 'right') && 
			<div className="survey-setup survey-setup_right">
				<StepButtons type="survey-setup__steps" url={url} />
				<OptionButtons type="survey-setup__options" />
				<input className="survey-setup__open-fullscreen" type="checkbox" id="more-settings-button" />
				<label className="survey-setup__cog" htmlFor="more-settings-button" ><i className="fa fa-cog" aria-hidden="true"></i></label>
				<div className="survey-setup__fullscreen">
					<label htmlFor="more-settings-button" ><i className="fa fa-times" aria-hidden="true"></i></label>
					<PageNavButtons url={url} />
					<StepButtons url={url} />
					<OptionButtons />
				</div>
			</div>
		}
		{ (position === 'template') === true &&
			<div className="survey-setup survey-setup_right">
				<OptionButtons type="survey-setup__options" template={position}/>
				<input className="survey-setup__open-fullscreen" type="checkbox" id="more-settings-button" />
				<label className="survey-setup__cog" htmlFor="more-settings-button" ><i className="fa fa-cog" aria-hidden="true"></i></label>
				<div className="survey-setup__fullscreen">
					<label htmlFor="more-settings-button" ><i className="fa fa-times" aria-hidden="true"></i></label>
					<OptionButtons template={position}/>
				</div>
			</div>
		}
	</aside>
);

export default Options;
