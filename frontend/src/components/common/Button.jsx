import { Link } from 'react-router-dom'

/**
 * @param {boolean} submit Optional. Determines whether the button is of type submit. If not provided, default type = button  
 * @param {boolean} secondary Optional. Determines whether the button has a CSS class of btn-secondary.
 * @param {boolean} tertiary Optional. Determines whether the button has a CSS class of btn-tertiary.
 * @param {Function} clickHandler Defines actions on the button's onClick event.
 * @param {boolean} link Optional. If provided, instead of a button element, a react-router-dom Link component is rendered.
 * @param {string} linkRef Determines where the Link redirects the user.  
 * @param {object} product Optional. Payload object for Link state property.
 * @param {any} children Anything caught between the opening and closing tags of the component.
 * @returns {React.FC}   A React function component.
 */
const Button = ({ 
  submit, 
  secondary, 
  tertiary,
  clickHandler, 
  link,
  linkRef,
  product,
  children 
}) => {
  const btnType = submit === true ? "submit" :  "button";
  const btnClass = `btn ${secondary ? "btn-secondary" : tertiary ? "btn-tertiary" : "btn-primary"}`

  return (
    !link ? (
      <button 
        className={btnClass} 
        type={btnType} 
        onClick={clickHandler}
      >
        {children}
      </button>
    ) : (
      <Link className={btnClass} to={linkRef} state={{...product}}>{children}</Link>
    )
  )
}

export default Button;
