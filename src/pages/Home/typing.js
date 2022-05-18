import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import "./typing.css"

const ReactTypingEffectDemo = () => {
  return (
    <div className='typing'>
      <p>자신과의 싸움,</p>
      <p>더 이상 </p>
      <p>지지 않을 당신을</p>
        <ReactTypingEffect
          text={["JYGY 합니다."]}
        />
    </div>
  );
};

export default ReactTypingEffectDemo;