import Input from "../../Input"
import "./Colors.css"

function Colors({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className="checkmark all"></span>All
        </label>

        <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        color="Black"
        name="test3"
        />

        <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        color="Blue"
        name="test3"
        />

        <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        color="Red"
        name="test3"
        />

        <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        color="Green"
        name="test3"
        />
    </div>
  )
}

export default Colors