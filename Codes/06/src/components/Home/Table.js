import React, { Component, PropTypes } from 'react';
import { Table, Modal } from 'antd';

const columns = [{
  title: '標題',
  dataIndex: 'title',
  width: 100,
}, {
  title: '描述',
  dataIndex: 'desc',
  width: 400,
}, {
  title: '發布日期',
  dataIndex: 'date',
  width: 100,
}, {
  title: '動作',
  render(text, record) {
    return <a className="op-btn" onClick={this.handleDelete.bind(this, record)}>移除</a>;
  },
}];

export default class ArticleTable extends Component {
  componentDidMount() {
    this.props.loadArticles();
  }

  handleDelete(record) {
    Modal.confirm({
      title: '提示',
      content: '確認要移除該文章嗎？'
    }).then(() => {
      this.props.deleteArticle(record);
    });
  }

  render() {
    return (
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="請輸入關鍵字"
            value={this.props.query}
            onChange={this.props.changeQuery}
          />
          <button onClick={this.props.search}>搜尋</button>
        </div>
        <Table columns={columns.map(c => c.render ? ({
          ...c,
          render: c.render.bind(this)
        }) : c)} dataSource={this.props.articles} />
      </div>
    );
  }
}
