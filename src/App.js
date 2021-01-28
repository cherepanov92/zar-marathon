import './App.css';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

import Bg1 from './assets/bg1.jpg';
import Bg2 from './assets/bg2.jpg';
import Bg3 from './assets/bg3.jpg';

function App() {
  return (
    <>
      <Header title='title' descr='descr'/>
      <Layout id='1' title='title 1' descr='deskr 1' urlBg={Bg1}/>
      <Layout id='2' title='title 2' descr='deskr 2' colorBg='red'/>
      <Layout id='3' title='title 3' descr='deskr 3' urlBg={Bg2}/>
      <Footer />
    </>
  );
}

export default App;
