export const styleSignInButton = {
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '232px',
  minHeight: '40px',
  marginTop: '16px',
  padding: '0 16px',
  fontSize: '13px',
  borderRadius: '2px',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
  '&:focus': {
    outline: 'none'
  },
  span: {
    marginLeft: '16px'
  }
}

export const styleAuthForm = {
  form: {
    width: '100%',
    maxWidth: '232px',
    margin: '0 auto',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#f8f8f8'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px'
  },
  input: {
    border: '1px solid #ccc',
    width: '100%',
    height: '40px',
    borderRadius: '2px',
    padding: '0 0 0 12px'
  },
  button: {
    width: '100%',
    height: '40px',
    background: '#000',
    color: '#fff',
    borderRadius: '3px',
    marginTop: '24px'
  },
  p: {
    fontSize: '14px',
    a: {
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none'
      }
    }
  }
}
