import "./switch.scss";

function Switch(props) {
  return (
    <section className="inline-block">
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          checked={props.checked ?? false}
          onChange={props.onChange}
        />
        <span className="switch__slider switch__round"></span>
      </label>
    </section>
  );
}

export default Switch;
