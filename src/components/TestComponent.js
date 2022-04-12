
import './test.css'

export default function TestComponent (props) {
  console.log('props placeToSave',props.placeToSave.length)
  return (
    <section className='test-component-header'>
      <h2>Test Component</h2>
      <h3>Location to save: {props.placeToSave}</h3>
      <button>Add location to list</button>
    </section>
  )
}
