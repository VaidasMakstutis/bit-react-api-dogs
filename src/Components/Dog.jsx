function Dog(props) {
    return (
        <div className="card">
        <div className="card-body">
          <img alt='dog' src={props.specie} />
        </div>
      </div>
    )
}

export default Dog;