import React from 'react';
import Responsive from '../components/common/Responsive';
import TagBoxContainer from '../containers/TagBoxContainer';
import WriteActionButtonContainer from '../containers/WriteActionButtonContainer';
import WriteContaienr from '../containers/WriteContaienr';

const WritePage = () => {
  return (
    <Responsive>
      <WriteContaienr />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
};

export default WritePage;
