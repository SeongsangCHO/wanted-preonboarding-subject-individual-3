import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Spin, Row, Col } from 'antd';
import { SpinSize } from 'antd/lib/spin';

import Loading from './Loading';

interface ISpinnerProps {
	tip?: string;
	size?: SpinSize;
	delay?: number;
	style?: React.CSSProperties;
	mask?: boolean;
}

interface IWrapperProp {
	readonly ['data-mask']: boolean;
}

const StyledSpinnerWrapper = styled(Row)<IWrapperProp>`
	background-color: ${styleProps => (styleProps['data-mask'] ? 'rgba(0, 0, 0, 0.1)' : 'transparent')};
`;

function Spinner(props: ISpinnerProps): ReactElement {
	const { tip, size, delay, style, mask = false } = props;

	return (
		<StyledSpinnerWrapper className="spinner-wrap" justify="center" align="middle" style={style} data-mask={mask}>
			<Col>
				<Spin indicator={<Loading size={size} />} delay={delay} tip={tip} size={size} />
			</Col>
		</StyledSpinnerWrapper>
	);
}

Spinner.defaultProps = {
	tip: '로딩중입니다.',
	size: 'large',
	delay: 0,
	style: {},
	mask: false,
};

export default Spinner;
