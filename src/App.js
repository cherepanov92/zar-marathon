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
      <Layout urlBg={Bg1}/>
      <Layout colorBg='red'/>
      <Layout urlBg={Bg2}/>
      <Footer />
    </>
  );
}

export default App;
