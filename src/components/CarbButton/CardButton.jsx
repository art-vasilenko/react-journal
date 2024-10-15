import './CardButton.sass'

export const CardButton = ({ children, className }) => {
  const cl = 'card-button' + (className? ' '+className: '')
  return (
    <div className={cl}>
      {children}
    </div>
  )
}
