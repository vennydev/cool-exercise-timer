import { Setting, NoMatch } from './pages';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { RecoilRoot } from 'recoil';


export default function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}