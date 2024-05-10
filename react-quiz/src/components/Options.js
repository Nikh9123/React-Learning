function Options({Question}) {
    return (
        <div>
            <div className="options">
        {Question.options.map((option) => (
          <button className="glow-on-hover" type="button">
            {option}
          </button>
        ))}
      </div>
        </div>
    )
}

export default Options
