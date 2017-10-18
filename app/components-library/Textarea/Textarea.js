import React, { PureComponent } from 'react';
import Type from 'prop-types';

import cn from 'cn-decorator';

import './textarea.css';

@cn('textarea')
class Textarea extends PureComponent {
  static propTypes = {
    onChange: Type.func,
    onFocus: Type.func,
    onBlur: Type.func,
    value: Type.string,
    placeholder: Type.string,
    error: Type.string,
  };

  static defaultProps = {
    placeholder: '',
  };

  state = {
    value: '',
    showError: true,
  }

  textarea;

  componentWillReceiveProps(nextProps) {
    if (this.props.error !== nextProps.error) {
      this.setState({
        showError: true,
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });

    if (this.props.onChange) {
      this.props.onChange(target.value);
    }
  }

  handleFocus = () => {
    this.setState({
      showError: false,
    })

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  handleBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  get value() {
    return this.props.value !== undefined
      ? this.props.value
      : this.state.value;
  }

  set value(value) {
    this.setState({
      value,
    });
  }

  focus = () => {
    this.textarea.focus();
  }

  blur = () => {
    this.textarea.blur();
  }

  render(cn) {
    const value = this.value;

    return (
      <span className={cn('wrapper')}>
        <span className={cn('field-wrapper')}>
          <textarea
            className={cn()}
            value={value}
            placeholder={this.props.placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            ref={(textarea) => { this.textarea = textarea; }}
          />
        </span>
        {
          !!this.props.error && this.state.showError
          &&
          <span className={cn('error-wrapper')}>
            {this.props.error}
          </span>
        }
      </span>
    );
  }
}

export default Textarea;
