import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Layout } from '../components/Layout/Layout'
import './app.scss'


export function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}