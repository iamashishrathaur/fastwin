import Nav from '@/Components/Nav'
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<Nav/></body>
    </html>
    
  )
}
