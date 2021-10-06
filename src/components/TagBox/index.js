import React, { useState, useCallback, useEffect } from 'react';
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

const TagBox = ({ onChangeTags, tags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      setLocalTags([...localTags, tag]);
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const deleteTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (!localTags.includes(tag)) return;
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
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

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

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
