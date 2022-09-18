import Head from 'next/head';
import LabelBottomNavigation from './Footer';
import DrawerAppBar from './AppBar';

export default function Layout({ children }) {
    return (
      <>
        <Head>
          <title>WorldShaker Interactive:UI/UX</title>
        </Head>
        <DrawerAppBar/>
        <main>{children}</main>
  <LabelBottomNavigation/>

      </>
    )
  }
  