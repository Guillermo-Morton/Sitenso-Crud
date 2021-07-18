// !Do not remove the Layout import
import Layout from '@layouts/HorizontalLayout'

// ** Components

import NavB from './components/NavB/NavB'

const HorizontalLayout = props => <Layout menu={<NavB/>} {...props}>{props.children}</Layout>

export default HorizontalLayout
