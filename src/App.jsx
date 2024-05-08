import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Articles from './components/ArticleList'
import Article from './components/Article'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Articles/>}/>
      <Route path="/articles/:id" element={<Article/>}/>
    </Routes>
    </>
  )
}

export default App
