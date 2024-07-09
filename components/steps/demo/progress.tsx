import React from 'react';
import { Steps } from 'antd';

const description = 'This is a description.';
const App: React.FC = () => (
  <Steps
    current={1}
    percent={60}
    items={[
      {
        title: 'Analysing Script',
        description,
      },
      {
        title: 'Generating videos',
        description,
      },
      {
        title: 'Generating Voiceover',
        description,
      },
      {
        title: 'Finalising Video',
        description,
      },
    ]}
  />
);

export default App;
