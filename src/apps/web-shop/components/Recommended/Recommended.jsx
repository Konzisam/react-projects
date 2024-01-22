import Button from "../Button"
import "./Recommended.css"

function Recommended({handleClick}) {
  return (
    <>
    <div>
    <h2 className="recommended-title">Recommended</h2>
    <div className="recommended-flex">
      <Button onClickHandler={handleClick}  title="All Products"/>
      <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
      <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
      <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
      <Button onClickHandler={handleClick} value="vans" title="vans"/>

    </div>
    </div>
    </>
  )
}

export default Recommended