import React, { Component, PropTypes } from 'react';
import { Modal } from 'antd';
import { createForm } from 'redux-form-utils';
import formConfig from './Modal.config';

@createForm(formConfig)
export default class ArticleModal extends Component {
  render() {
    const { title, desc, date } = this.props.fields;
    return (
      <Modal
        visible={this.props.visible}
        onCancel={this.props.hideModal}
        onOk={this.props.addArticle}
      >
        <div className="form">
          <div className="control-group">
            <label>標題</label>
            <input type="text" {...title} />
          </div>
          <div className="control-group">
            <label>描述</label>
            <textarea {...title} />
          </div>
          <div className="control-group">
            <label>發布日期</label>
            <input type="date" {...title} />
          </div>
        </div>
      </Modal>
    );
  }
}
