import {IconWorld} from '@tabler/icons-react';
import BrandIcon from '#components/common/brand-icon.js';
import {Dropdown} from '#components/ui/dropdown.js';
import {linkRel} from '#constants';
import {useColorScheme, useI18n} from '#hooks';

const socialClassName =
	'box-content! block h-6 w-6 shrink-0 cursor-pointer rounded-md p-1.25 hover:bg-black/6';

export default function Socials() {
	const {isLight, iconFg} = useColorScheme();
	const {i18n} = useI18n();
	const color = isLight ? undefined : iconFg;

	return (
		<div className="flex">
			<Dropdown
				items={[
					{
						key: 'simple-icons',
						label: i18n.controls.iconLibrarySource,
						icon: <BrandIcon color="currentColor" slug="simpleicons" />,
						href: 'https://github.com/simple-icons/simple-icons',
					},
					{
						key: 'simpleicons.org',
						label: i18n.controls.websiteSource,
						icon: <IconWorld aria-hidden />,
						href: 'https://github.com/LitoMore/simpleicons.org',
					},
				]}
			>
				<button aria-label="GitHub" className={socialClassName} type="button">
					<BrandIcon className="h-full w-full" color={color} slug="github" />
				</button>
			</Dropdown>
			{/* eslint-disable-next-line react/jsx-no-target-blank */}
			<a
				aria-label="Discord"
				className={socialClassName}
				href="https://discord.gg/vUXFa7t5xJ"
				rel={linkRel}
				target="_blank"
			>
				<BrandIcon className="h-full w-full" color={color} slug="discord" />
			</a>
		</div>
	);
}
