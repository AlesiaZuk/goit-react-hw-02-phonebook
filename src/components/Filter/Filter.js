import { Component } from "react";
import s from "./Filter.module.css";

class Filter extends Component {
  render() {
    const { filter, handleChange } = this.props;

    return (
      <label className={s.filter_label}>
        Find contacts by name:
        <input
          className={s.filter_input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    );
  }
}

export default Filter;
