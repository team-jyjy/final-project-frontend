import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import "./typing.css"

const ReactTypingEffectDemo = () => {
  return (
    <div className='typing'>
        <ReactTypingEffect
          text={["자신과의 싸움,", "더 이상 지지 않을 당신을","JYGY 합니다."]}
        />
    </div>
  );
};

export default ReactTypingEffectDemo;