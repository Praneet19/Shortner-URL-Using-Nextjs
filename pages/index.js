import Head from 'next/head';
import styled from "styled-components";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BML from "../components/BML";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>URL Shortener</title>
      </Head>
      <Header/>
      <Features/>
      <BML/>
      <Footer/>  
    </Layout>
  )
}
