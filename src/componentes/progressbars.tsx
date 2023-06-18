import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

type props = {
    now: number,
    variant: string,
}

export default class BarraProgresso extends React.Component<props> {
    render() {
        const { now, variant } = this.props;

        return (
            <ProgressBar now={now} variant={variant} />
        );
    }
}

