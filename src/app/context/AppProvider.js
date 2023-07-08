import PropTypes from 'prop-types'
import AppContext, { useInitialAppValue } from './AppContext'

const AppProvider = ({ children, ...props }) => {
  return (
    <AppContext.Provider value={useInitialAppValue()} {...props}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
