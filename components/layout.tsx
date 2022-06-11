import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="mb-20"></div>
      {children}
      <Footer />
    </div>
  );
}
