import Button, {ButtonBase} from '@enact/moonstone/Button';
import UIButton, {ButtonBase as UIButtonBase} from '@enact/ui/Button';
import {icons} from '@enact/moonstone/Icon';
import React from 'react';
import {storiesOf} from '@storybook/react';

import {boolean, select, text} from '../../src/enact-knobs';
import {action, mergeComponentMetadata} from '../../src/utils';

// Button's prop `minWidth` defaults to true and we only want to show `minWidth={false}` in the JSX. In order to hide `minWidth` when `true`, we use the normal storybook boolean knob and return `void 0` when `true`.
Button.displayName = 'Button';
const Config = mergeComponentMetadata('Button', UIButtonBase, UIButton, ButtonBase, Button);

// Set up some defaults for info and knobs
const prop = {
	backgroundOpacity: ['', 'translucent', 'lightTranslucent', 'transparent'],
	icons: ['', ...Object.keys(icons)]
};

storiesOf('Moonstone', module)
	.add(
		'Button',
		() => (
			<Button
				onClick={action('onClick')}
				backgroundOpacity={select('backgroundOpacity', prop.backgroundOpacity, Config)}
				color={select('color', ['', 'red', 'green', 'yellow', 'blue'], Config, '')}
				disabled={boolean('disabled', Config)}
				icon={select('icon', prop.icons, Config)}
				iconPosition={select('iconPosition', ['', 'before', 'after'], Config, '')}
				minWidth={boolean('minWidth', Config) ? void 0 : false}
				selected={boolean('selected', Config)}
				size={select('size', ['', 'small', 'large'], Config)}
			>
				{text('children', Config, 'click me')}
			</Button>
		),
		{
			info: {
				text: 'The basic Button'
			}
		}
	);
