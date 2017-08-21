import dva from 'dva';
import './index.css';


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({}); // 可以使用 dva-loading插件 自动处理 loading 状态，例子里用的是 antd-mobile 里的Toast

// 3. Model

// 4. Router
app.router(require('./router'));


// 5. Start
app.start('#root');
