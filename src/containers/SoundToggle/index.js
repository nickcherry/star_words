// Import Dependencies
import React from 'react';
import { connect } from 'react-redux';

import { getSoundEnabled } from '../../selectors/sound';
import { setSoundEnabled } from '../../actions/sound';

import TextWrapper from './TextWrapper';
import Wrapper from './Wrapper';

// Define Component
class SoundToggle extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        { this.getText() }
        { this.getAudioTag() }
      </Wrapper>
    );
  }

  getText() {
    const text = this.props.soundEnabled ? 'Disable Sound' : 'Enable Sound';
    return <TextWrapper onClick={ this.toggle }>{ text }</TextWrapper>;
  }

  getAudioTag() {
    return this.props.soundEnabled ? <audio src="/music/star_wars.mp3" autoPlay/> : null;
  }

  toggle = () => {
    this.props.setSoundEnabled(!this.props.soundEnabled);
  }
}

// Map State
const mapStateToProps = (state) => {
  return {
    soundEnabled: getSoundEnabled(state),
  }
};

// Map Dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    setSoundEnabled: (enabled) => dispatch(setSoundEnabled(enabled)),
  };
}

// Export Component
export default connect(mapStateToProps, mapDispatchToProps)(SoundToggle);
