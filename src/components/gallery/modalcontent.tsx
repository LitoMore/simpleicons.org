import {useMediaQuery} from '@uidotdev/usehooks';
import {useColorMode} from '#atom';
import {CopyText} from '#components/ui/copy-text.js';
import {getContrastingIconColor} from '#components/ui/icon-color.js';
import {useSurfaceTheme} from '#components/ui/theme.js';
import {useI18n} from '#hooks';
import {ColorMode, type Icon} from '#types';
import {getAliases} from '#utils';

function DetailLink({
	url,
	label,
}: {
	readonly url: string;
	readonly label?: string;
}) {
	return (
		<CopyText text={url}>
			<a
				className="ui-link"
				dir="ltr"
				href={url}
				rel="noopener nofollow noreferrer"
				target="_blank"
				title={url}
			>
				{label ?? url.replace(/^https?:\/\//, '').replace(/^www\./, '')}
			</a>
		</CopyText>
	);
}

function ModalContent({icon}: {readonly icon?: Icon}) {
	const [colorMode] = useColorMode();
	const theme = useSurfaceTheme();
	const isHighContrastPreferred = useMediaQuery('(prefers-contrast: more)');
	const {i18n} = useI18n();
	if (!icon) return null;

	const aliases = getAliases(icon);
	const hexColor = `#${icon.hex}`;
	const iconColor =
		colorMode === ColorMode.Contrast
			? getContrastingIconColor({
					color: hexColor,
					theme,
					prefersMoreContrast: isHighContrastPreferred,
				})
			: hexColor;

	return (
		<div className="ui-dialog-details">
			<div>
				<div className="flex h-full items-center justify-center">
					<svg
						aria-hidden
						className="ui-dialog-icon"
						fill={iconColor}
						viewBox="0 0 24 24"
					>
						<path d={icon.path} />
					</svg>
				</div>
			</div>

			<div>
				<div className="flex flex-col">
					<div className="modal-title">{i18n.modal.title}</div>
					<CopyText text={icon.title}>
						<bdi>{icon.title}</bdi>
					</CopyText>
				</div>

				{aliases.length > 0 && (
					<div className="flex flex-col">
						<div className="modal-title">{i18n.modal.aliases}</div>
						<div className="flex gap-2">
							{aliases.map((alias) => (
								<div key={alias} className="modal-text">
									<bdi>{alias}</bdi>
								</div>
							))}
						</div>
					</div>
				)}

				<div className="flex flex-col">
					<div className="modal-title">{i18n.modal.color}</div>
					<div>
						<CopyText text={hexColor}>
							<span
								className="ui-brand-color"
								dir="ltr"
								style={{color: icon.relativeColor, backgroundColor: hexColor}}
							>
								{hexColor}
							</span>
						</CopyText>
					</div>
				</div>

				<div className="flex flex-col">
					<div className="modal-title">
						{icon.source === icon.guidelines
							? i18n.modal.sourceAndGuidelines
							: i18n.modal.source}
					</div>
					<DetailLink url={icon.source} />
				</div>

				{icon.source !== icon.guidelines && icon.guidelines ? (
					<div className="flex flex-col">
						<div className="modal-title">{i18n.modal.guidelines}</div>
						<DetailLink url={icon.guidelines} />
					</div>
				) : null}

				{icon.license ? (
					<div className="flex flex-col">
						<div className="modal-title">{i18n.modal.license}</div>
						{'url' in icon.license ? (
							<DetailLink url={icon.license.url} />
						) : (
							<DetailLink
								label={icon.license.type}
								url={`https://spdx.org/licenses/${icon.license.type}`}
							/>
						)}
					</div>
				) : null}
			</div>
		</div>
	);
}

export default ModalContent;
