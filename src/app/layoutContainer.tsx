"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Provider } from 'react-redux';
import store from '../store';
import QueryProvider from '../components/QueryProvider';

export default function LayoutContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <Provider store={store}>
      <Navbar />
      <QueryProvider>{children}</QueryProvider>
      <Footer />
    </Provider>
  );
}
