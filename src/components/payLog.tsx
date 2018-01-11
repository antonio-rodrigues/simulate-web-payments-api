import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../store/reducers/pay';

// import { Button, Icon } from 'semantic-ui-react'

interface StateProps {
  tail: State
}

interface DispatchProps {
}

import { OwnProps } from '../utils/interfaces'

const PayLog: React.StatelessComponent<OwnProps & StateProps> = ({ tail }) => (
    <div>{ JSON.stringify(tail) }</div>
)

const mapState2Props = (state: State): StateProps => ({
    tail: state
});

const mapDispatch2Props = (dispatch: Dispatch<State>): DispatchProps => ({})

export default connect<StateProps, DispatchProps, OwnProps>(mapState2Props, mapDispatch2Props)(PayLog)
