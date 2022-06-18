import { FC } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mb-20"></div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
