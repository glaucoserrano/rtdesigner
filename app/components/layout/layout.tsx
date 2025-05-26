import {Inter} from 'next/font/google';
import { Header } from '../header';

type LayoutProps = {
  children: React.ReactNode;
};
const inter = Inter({ subsets: ['latin'] });

export const Layout = ({ children }: LayoutProps) => (
      <div className={`relative 
        flex 
        flex-col
        ${inter.className}
        min-h-screen
        bg-pink-200`}>
          <Header />
            {children}
        </div>
)