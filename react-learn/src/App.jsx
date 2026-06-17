import { Routes, Route, Link, BrowserRouter} from 'react-router-dom'

import AboutPage from './components/About'

import HomePage from './components/Home'

import ContactPage from './components/Contact'

const App = () => { return (
<>
<BrowserRouter>

<nav>

<Link to="/">Home</Link> |

<Link to="/about"> About</Link> |

<Link to="/contact"> Contact</Link>

</nav>

<Routes>

<Route path="/" element={<HomePage></HomePage>}  /> 
<Route path="/about" element={<AboutPage></AboutPage>} /> 
<Route path="/contact" element={<ContactPage></ContactPage>} />

</Routes>

</BrowserRouter>
</>
)
}

export default App