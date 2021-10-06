import React from 'react';
import {
  StyledTagBox,
  StyledTagForm,
  StyledTagList,
  StyledTagItem,
} from './styles/TagBox';

const TagItem = React.memo(({ tag }) => <StyledTagItem>#{tag}</StyledTagItem>);

const TagList = React.memo(({ tags }) => (
  <StyledTagList>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} />
    ))}
  </StyledTagList>
));

const TagBox = () => {
  return (
    <StyledTagBox>
      <h4>태그</h4>
      <StyledTagForm>
        <input placeholder="태그를 입력하세요" />
        <button type="submit">추가하기</button>
      </StyledTagForm>
      <TagList tags={['태그1', '태그2', '태그3']} />
    </StyledTagBox>
  );
};

export default TagBox;
