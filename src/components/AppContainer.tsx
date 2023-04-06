export interface AppContainerProps {
  children?: React.ReactNode
}

const AppContainer = ({ children }: AppContainerProps): JSX.Element => {
  return <div className="app-container">{children}</div>
}

export default AppContainer
