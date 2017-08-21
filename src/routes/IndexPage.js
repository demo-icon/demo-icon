import React from 'react';
import { Button, Toast } from 'antd-mobile';

class IndexPage extends React.Component {
  show = () => {
    Toast.success('成功', 3);
  }
  render() {
    return (
      <Button className="btn" type="primary" onClick={() => this.show()}>显示toast</Button>
    );
  }
}
export default (IndexPage);
