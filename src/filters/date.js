//remember: using filters such way is not always justified
export default value => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], 
    {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }
    
  )
}