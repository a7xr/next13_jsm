import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and Share AI Prompts'
}

const RootLayout = ({children}) => { //
  return (
    <html>
        <div className="main">
            <div className="gradient"></div>
        </div>
        <main className="app">
            <Nav></Nav>
            {children} {/* */}
            <Provider></Provider>
        </main>
    </html>
  )
}

export default RootLayout