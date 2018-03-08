// Import Dependencies
import React from 'react';
import Wrapper from './Wrapper';


// Define Component
class AssetPreloader extends React.PureComponent {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <span style={{ fontFamily: 'Star Jedi' }}>
          Star Jedi
        </span>
        <span style={{ fontFamily: 'Star Jedi Hollow' }}>
          Star Jedi Hollow
        </span>
      </Wrapper>
    );
  }
}
// Export
export default AssetPreloader;
