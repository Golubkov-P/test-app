import React, { PureComponent } from 'react';
import Type from 'prop-types';

import ContentWrapper from 'components/content-wrapper';
import Form from 'library/Form';
import Input from 'library/Input';
import Textarea from 'library/Textarea';
import FormField from 'library/FormField';
import Button from 'library/Button';

import './add-form.css'

class AddForm extends PureComponent {
  static propTypes = {
    onSubmit: Type.func,
  }

  state = {
    fields: ['title', 'description'],
    errors: {},
  }

  /** @type {Input} */
  title;

  /** @type {Textarea} */
  description;

  handleSubmit = () => {
    const isValid = this.isValideForm();

    if (this.props.onSubmit && isValid) {
      this.props.onSubmit({
        title: this.title.value,
        description: this.description.value,
      });

      this.state.fields.forEach(field => {
        this[field].value = '';
      });
    }
  }

  isValideForm = () => {
    let isValid = true;
    let errors = {};

    this.state.fields.forEach((field) => {
      const fieldValue = this[field].value;

      if (fieldValue.length === 0) {
        isValid = false;
        errors[field] = 'Это поле обязательно к заполнению';
      }
    });

    this.setState({
      errors,
    });

    return isValid;
  }

  render() {
    return (
      <section className="add-blog">
        <ContentWrapper>
          <h2 className="title">
            Форма создания поста
        </h2>
          <Form
            onSubmit={this.handleSubmit}
          >
            <FormField>
              <Input
                placeholder="Название поста"
                error={this.state.errors.title}
                ref={(input) => { this.title = input; }}
              />
            </FormField>
            <FormField>
              <Textarea
                placeholder="Содержание поста"
                error={this.state.errors.description}
                ref={(textarea) => { this.description = textarea; }}
              />
            </FormField>
            <FormField alignItems="right">
              <Button type="submit">
                Создать пост
              </Button>
            </FormField>
          </Form>
        </ContentWrapper>
      </section>
    );
  }
}

export default AddForm;
