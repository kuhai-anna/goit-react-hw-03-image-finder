// import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';
import { IconButton } from 'components/IconButton/IconButton';

export const Searchbar = () => {
  return (
    <header className="searchbar">
      <Formik>
        <Form className="form">
          <IconContext.Provider
            value={{
              color: '#212121',
              size: '20px',
            }}
          >
            <IconButton type="submit" aria-label="Search button">
              <BsSearch width="40" height="40" />
            </IconButton>
          </IconContext.Provider>

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
