

const List  = (props)=> {
  return (
    <article>
           <ul>
          {
            props.notes.map((item,index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
    </article>
  )
}
export default List
