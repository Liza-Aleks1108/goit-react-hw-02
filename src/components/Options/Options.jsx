import css from "./Options.module.css";

export default function Options({
  options,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.container}>
      {options.map((option) => (
        <button
          className={css.button}
          key={option}
          onClick={() => updateFeedback(option.toLowerCase())}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
