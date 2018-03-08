// Import Dependencies
import React from 'react';
import { connect } from 'react-redux';
import Isvg from 'react-inlinesvg';

import { getSoundEnabled } from '../../selectors/sound';
import { setSoundEnabled } from '../../actions/sound';

import soundDisabledIcon from '../../assets/icons/sound_disabled.svg';
import soundEnabledIcon from '../../assets/icons/sound_enabled.svg';

import Wrapper from './Wrapper';

// Define Component
class SoundToggle extends React.PureComponent {
  render() {
    return (
      <Wrapper onClick={ this.toggle }>
        { this.getIcon() }
        { this.getAudioTag() }
      </Wrapper>
    );
  }

  getIcon() {
    return this.props.soundEnabled ? <Isvg src={ soundEnabledIcon } /> : <Isvg src={ soundDisabledIcon } />;
  }

  getAudioTag() {
    return this.props.soundEnabled ? <audio src="/music/star_wars.mp3" autoPlay/> : null;
  }

  toggle = () => {
    console.log('here')
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
