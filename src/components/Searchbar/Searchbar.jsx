// import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';

export const Searchbar = () => {
  return (
    <header className="searchbar">
      <Formik>
        <Form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <Field
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
