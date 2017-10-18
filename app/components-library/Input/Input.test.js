import React from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Input from './Input';

describe('Test Input', () => {

  it ('Should render without problem', () => {
    const wrapper = shallow(<Input />);
  
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.input__wrapper').exists).toBeTruthy();
    expect(wrapper.find('.input__field-wrapper').exists).toBeTruthy();
    expect(wrapper.find('.input').exists).toBeTruthy();
  });

  it ('Should invoke onChange onFocus onBlur', () => {
    const onChange = sinon.spy();
    const onFocus = sinon.spy();
    const onBlur = sinon.spy();
    const wrapper = shallow(<Input onChange={onChange} onFocus={onFocus} onBlur={onBlur} />);

    wrapper.find('.input').at(0).simulate('focus');
    wrapper.find('.input').at(0).simulate('blur');
    wrapper.find('.input').at(0).simulate('change', { target: { value: 'text' } });

    expect(onChange.called).toBeTruthy();
    expect(onFocus.called).toBeTruthy();
    expect(onBlur.called).toBeTruthy();
  });

  it ('should change state on onChange', () => {
    const value = 'text';
    const wrapper = shallow(<Input />);
    
    wrapper.find('.input').at(0).simulate('change', { target: { value } });

    expect(wrapper.instance().state.value).toBe(value);
  });

  it('should render error', () => {
    const wrapper = shallow(<Input error="error" />);
    const error = wrapper.find('.input__error-wrapper');

    expect(error.at(0).text()).toBe('error');
  });
});
