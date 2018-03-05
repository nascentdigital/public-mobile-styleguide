var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
import mapValues from 'lodash/mapValues';
import memoize from 'lodash/memoize';
import Styled from 'rsg-components/Styled';
import Link from 'rsg-components/Link';
import Text from 'rsg-components/Text';
import Para, { styles as paraStyles } from 'rsg-components/Para';
import MarkdownHeading from 'rsg-components/Markdown/MarkdownHeading';
import List from 'rsg-components/Markdown/List';
import Blockquote from 'rsg-components/Markdown/Blockquote';
import Pre from 'rsg-components/Markdown/Pre';
import Code from 'rsg-components/Code';
import Checkbox from 'rsg-components/Markdown/Checkbox';
import { Table, TableHead, TableBody, TableRow, TableCell } from 'rsg-components/Markdown/Table';

// We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved
require('!!../../../loaders/style-loader!../../../loaders/css-loader!highlight.js/styles/tomorrow.css');

// Custom CSS classes for each tag: <em> → <em className={s.em}> + custom components
var getBaseOverrides = memoize(function (classes) {
	var styleOverrides = mapValues(classes, function (value) {
		return {
			props: {
				className: value
			}
		};
	});

	return _extends({}, styleOverrides, {
		a: {
			component: Link
		},
		h1: {
			component: MarkdownHeading,
			props: {
				level: 1
			}
		},
		h2: {
			component: MarkdownHeading,
			props: {
				level: 2
			}
		},
		h3: {
			component: MarkdownHeading,
			props: {
				level: 3
			}
		},
		h4: {
			component: MarkdownHeading,
			props: {
				level: 4
			}
		},
		h5: {
			component: MarkdownHeading,
			props: {
				level: 5
			}
		},
		h6: {
			component: MarkdownHeading,
			props: {
				level: 6
			}
		},
		p: {
			component: Para,
			props: {
				semantic: 'p'
			}
		},
		em: {
			component: Text,
			props: {
				semantic: 'em'
			}
		},
		strong: {
			component: Text,
			props: {
				semantic: 'strong'
			}
		},
		ul: {
			component: List
		},
		ol: {
			component: List,
			props: {
				ordered: true
			}
		},
		blockquote: {
			component: Blockquote
		},
		code: {
			component: Code
		},
		pre: {
			component: Pre
		},
		input: {
			component: Checkbox
		},
		table: {
			component: Table
		},
		thead: {
			component: TableHead
		},
		th: {
			component: TableCell,
			props: {
				header: true
			}
		},
		tbody: {
			component: TableBody
		},
		tr: {
			component: TableRow
		},
		td: {
			component: TableCell
		}
	});
}, function () {
	return 'getBaseOverrides';
});

// Inline mode: replace <p> (usual root component) with <span>
var getInlineOverrides = memoize(function (classes) {
	var overrides = getBaseOverrides(classes);

	return _extends({}, overrides, {
		p: {
			component: Text
		}
	});
}, function () {
	return 'getInlineOverrides';
});

var styles = function styles(_ref) {
	var space = _ref.space,
	    fontFamily = _ref.fontFamily,
	    color = _ref.color;
	return {
		base: {
			color: color.base,
			fontFamily: fontFamily.base,
			fontSize: 'inherit'
		},
		para: paraStyles({ space: space, color: color, fontFamily: fontFamily }).para,
		hr: {
			composes: '$para',
			borderWidth: [[0, 0, 1, 0]],
			borderColor: color.border,
			borderStyle: 'solid'
		}
	};
};

function Markdown(_ref2) {
	var classes = _ref2.classes,
	    text = _ref2.text,
	    inline = _ref2.inline;

	var overrides = inline ? getInlineOverrides(classes) : getBaseOverrides(classes);
	return compiler(text, { overrides: overrides, forceBlock: true });
}

Markdown.propTypes = {
	classes: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	inline: PropTypes.bool
};

export default Styled(styles)(Markdown);