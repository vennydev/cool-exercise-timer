import { Routes, Route } from 'react-router-dom';
import {Home, Login, Proceed, Setting, Mypage, NoMatch} from './pages';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/proceed" element={<Proceed />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}