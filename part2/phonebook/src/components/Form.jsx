

const Form = ({handleSubmit,handleOnChangeInput}) => {
    return(
        <>
         <form>
        <div>
          name: <input type="text" onChange={handleOnChangeInput} name="name" />
        </div>
        <div>
          number:{" "}
          <input
            type="number"
            onChange={handleOnChangeInput}
            name="number"
          ></input>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
        </>
    )
};

export default Form;


