import './globals.css';
import { ToastContainer} from './Toast';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <ToastContainer
       autoClose={3000}
       position="bottom-center"
       hideProgressBar
       newestOnTop={false}
       closeButton={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable={false}
       pauseOnHover/>
      </body>
    </html>
  )
}
