import React, { useState, useCallback } from 'react';
import {
  StyledTagBox,
  StyledTagForm,
  StyledTagList,
  StyledTagItem,
} from './styles/TagBox';

const TagItem = React.memo(({ tag, onDelete }) => (
  <StyledTagItem onClick={() => onDelete(tag)}>#{tag}</StyledTagItem>
));

const TagList = React.memo(({ tags, onDelete }) => (
  <StyledTagList>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onDelete={onDelete} />
    ))}
  </StyledTagList>
));

const TagBox = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      setLocalTags([...localTags, tag]);
    },
    [localTags],
  );

  const deleteTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (!localTags.includes(tag)) return;
      setLocalTags(localTags.filter((t) => t !== tag));
    },
    [localTags],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput('');
    },
    [input, setInput, insertTag],
  );

  return (
    <StyledTagBox>
      <h4>태그</h4>
      <StyledTagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          onChange={onChange}
          value={input}
        />
        <button type="submit">추가하기</button>
      </StyledTagForm>
      <TagList tags={localTags} onDelete={deleteTag} />
    </StyledTagBox>
  );
};

export default TagBox;
