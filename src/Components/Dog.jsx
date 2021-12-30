function Dog(props) {
  return (
    <div className="card">
      <div className="card-body">
          <img src={props.specie} alt='dog' />
      </div>
    </div>
  );
}

export default Dog;